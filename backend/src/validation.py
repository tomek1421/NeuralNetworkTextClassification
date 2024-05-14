from marshmallow import Schema, ValidationError, fields, validate
from marshmallow.validate import Length, Email, And, ContainsOnly, Regexp

class CheckDiabetes(Schema):
    pregnancies = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error="Pregnancies number must be greater than or equal 0"),
            validate.Range(max=20, error="Pregnancies number must be less than or equal 20")
        ]
    ) # 1-20

    glucose = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error="Glucose concentration must be greater than or equal 0"),
            validate.Range(max=200, error="Glucose concentration must be less than or equal 200")
        ]
    ) # 0-200 Plasma glucose concentration over 2 hours in an oral glucose tolerance test

    blood_presure = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error="Blood presure must be greater than or equal 0"),
            validate.Range(max=130, error="Blood presure must be less than or equal 130")
        ]
    ) # 0-130 Diastolic blood pressure (mm Hg)
    
    skin_thickness = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error="Skin thickness must be greater than or equal 0"),
            validate.Range(max=100, error="Skin thickness must be less than or equal 100")
        ]
    ) # 0-100 Triceps skin fold thickness (mm)

    insulin = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error="Insulin must be greater than or equal 0"),
            validate.Range(max=900, error="Insulin must be greater than or equal 900")
        ]
    ) # 0-900 2-Hour serum insulin (mu U/ml)

    bmi = fields.Float(
        required=True,
        validate=[
            validate.Range(min=0, error="BMI must be greater than or equal 0"),
            validate.Range(max=70, error="BMI must be less than or equal 70"),
        ]
    ) # 0-70 Body mass index (weight in kg/(height in m)2)
    
    diabetes_function = fields.Float(
        required=True,
        validate=[
            validate.Range(min=0, error="Diabetes pedigree function must be greater than or equal 0"),
            validate.Range(max=2.50, error="Diabetes pedigree function must be less than or equal 2.5"),
        ]
    ) # 0.08-2.50 Diabetes pedigree function (a function which scores likelihood of diabetes based on family history)
    
    age = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error="Age must be greater than or equal 0"),
            validate.Range(max=100, error="Age must be less than or equal 100")
        ]
    )

class TeslModel(Schema):
    algorithm = fields.String(
        required=True,
        validate=Regexp(r'\b(mlp|gnb|dt)\b', error="Invalid algorithm. Must be one of 'mlp', 'gnb', or 'dt'.")
    )
    layers = fields.List(
        fields.Integer(
            validate=validate.Range(min=1, max=100, error="Each neuron must be an integer between 1 and 100."),
        ),
        required=True,
        error="Layers must be provided as a list of integers (neurons)."
    )
    iterations = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error="Iterations must be a non-negative integer."),
            validate.Range(max=10000, error="Iterations must be less than or equal to 10000.") 
        ]
    )
    solver = fields.String(
        required=True,
        validate=Regexp(r'\b(adam|lbfgs|sgd)\b', error="Invalid solver. Must be one of 'adam', 'lbfgs', or 'sgd'.")
    )
    activation = fields.String(
        required=True,
        validate=Regexp(r'\b(identity|logistic|relu|tanh)\b', error="Invalid activation. Must be one of 'identity', 'logistic', 'relu', or 'tanh'.")
    )
    
    # learning_rate_init = fields.Float(
    #     required=True,
    #     validate=[
    #         validate.Range(min=0.0001, error="Learning rate init must be greater than or equal to 0.0001."),
    #         validate.Range(max=0.1, error="Learning rate init must be less than or equal to 0.1.")
    #     ]
    # )
    # learning_rate = fields.String(
    #     required=True,
    #     validate=Regexp(r'\b(adaptive|constant|invscaling)\b', error="Invalid learning rate. Must be one of 'adaptive', 'constant', or 'invscaling'.")
    # )
    # alpha = fields.Float(
    #     required=True,
    #     validate=[
    #         validate.Range(min=0.0001, error="Alpha must be greater than or equal to 0.0001."),
    #         validate.Range(max=0.1, error="Alpha must be less than or equal to 0.1.")
    #     ]
    # )
