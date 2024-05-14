from flask import Flask, render_template, request
from model_diabetes import ModelDiabetes

from validation import CheckDiabetes, TeslModel
from functions import tuple_parse
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# initialize diabetes model
model_diabetes = ModelDiabetes()
# model_diabetes.createMLP(layers=(8,8,8,8,3), iterations=10000, solver="lbfgs", activation="relu", learning_rate_init=0.001, learning_rate="adaptive", alpha=0.01)
model_diabetes.loadMLP()
model_diabetes.train()
model_diabetes.accuracy()

# initialize playground model
model_playground = ModelDiabetes()
model_playground.createMLP()
model_playground.train()

# validation schemas
check_diabetes_schema = CheckDiabetes()
test_model_schema = TeslModel()

@app.route('/')
def index():
    return {
        "message": "Hello from app!"
    }

@app.route('/diabetes/check', methods=['POST'])
def check():
    req = request.json

    errors = check_diabetes_schema.validate(req)
    if errors:
        return errors, 400

    # conrevting data to array readable for model prediction
    data = [[]]
    for field in req.items():
        data[0].append(field[1])
    
    result = model_diabetes.prediction(data)[0]
    if result == 1:
        return {"result": "positive"}, 200
    return {"result": "negative"}, 200

@app.route('/model/test', methods=['POST'])
def accuracy():
    req = request.json

    errors = test_model_schema.validate(req)
    if errors:
        return errors, 400
    
    algorithm = req['algorithm']

    match algorithm:
        case "mlp":
            layers = req['layers']
            iterations = req['iterations']
            solver = req['solver']
            activation = req['activation']

            layers = tuple_parse(layers)
            print(layers)
            model_playground.createMLP(layers=layers, iterations=iterations, solver=solver, activation=activation)
        case "gnb":
            model_playground.createGaussianNB()
        case "dt":
            model_playground.createDecisionTree()
        case _:
            raise KeyError("Invalid model type")
        

    model_playground.train()

    accuracy = model_playground.accuracy()
    matrix = model_playground.confusionMatrix()
    loss = model_playground.loss()

    tab = [[
         int(matrix[0][0]),
        int(matrix[0][1])
    ],[
        int(matrix[1][0]),
        int(matrix[1][1])
    ]]

    return {
        "training_accuracy": accuracy["training_accuracy"],
        "test_accuracy": accuracy["test_accuracy"],
        "loss": loss,
        "matrix": tab
    }, 200



if __name__ == '__main__':
    app.run(debug=True)