from marshmallow import Schema, ValidationError, fields, validate
from marshmallow.validate import Length, Email, And, ContainsOnly, Regexp

class CheckDiabetes(Schema):
    pregnancies = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error=""),
            validate.Range(max=20, error="")
        ]
    ) # 1-20

    glucose = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error=""),
            validate.Range(max=200, error="")
        ]
    ) # 0-200 Plasma glucose concentration over 2 hours in an oral glucose tolerance test

    blood_presure = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error=""),
            validate.Range(max=130, error="")
        ]
    ) # 0-130 Diastolic blood pressure (mm Hg)
    
    skin_thickness = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error=""),
            validate.Range(max=100, error="")
        ]
    ) # 0-100 Triceps skin fold thickness (mm)

    insulin = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error=""),
            validate.Range(max=900, error="")
        ]
    ) # 0-900 2-Hour serum insulin (weight in kg/(height in m)2)

    bmi = fields.Float(
        required=True,
        validate=[
            validate.Range(min=0, error=""),
            validate.Range(max=70, error=""),
        ]
    ) # 0-70 Body mass index
    
    diabetes = fields.Float(
        required=True,
        validate=[
            validate.Range(min=0.08, error=""),
            validate.Range(max=2.50, error=""),
        ]
    ) # 0.08-2.50 Diabetes pedigree function (a function which scores likelihood of diabetes based on family history)
    
    age = fields.Integer(
        required=True,
        validate=[
            validate.Range(min=0, error=""),
            validate.Range(max=100, error="")
        ]
    )