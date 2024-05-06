from flask import Flask, render_template, request
from model_diabetes import ModelDiabetes

from validation import CheckDiabetes

app = Flask(__name__)

model_diabetes = ModelDiabetes()
model_diabetes.createMLP(layers=(8,8,8,8,3), iterations=10000, solver="lbfgs", activation="relu", learning_rate_init=0.001, learning_rate="adaptive", alpha=0.01)
model_diabetes.train()
model_diabetes.accuracy()

check_diabetes_schema = CheckDiabetes()

@app.route('/')
def index():
    return {
        "message": "Hello from app!"
    }

@app.route('/diabetes/check', methods=['POST'])
def check():
    req = request.json

    errors = check_diabetes_schema.validate(req)
    if(errors):
        return errors, 400

    data = [[]]
    for field in req.items():
        data[0].append(field[1])
    
    result = model_diabetes.prediction(data)[0]
    if result == 1:
        return {"result": "positive"}, 200
    return {"result": "negative"}, 200

if __name__ == '__main__':
    app.run(debug=True)