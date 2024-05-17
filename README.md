# NeuralNetworkTextClassification

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Features](#features)
5. [Code](#code)

## Introduction 

Welcome to our Diabetes Prediction website documentation! Our website utilizes advanced neural network and other algorithms to predict the likelihood of an individual developing diabetes based on various health parameters. Additionally, our platform allows users to customize the AI models and analyze the results, including accuracy rates and other performance metrics.

## Usage 

Our website offers the following features:

- **Diabetes Prediction:** Predict the likelihood of an individual developing diabetes based on input parameters such as age, BMI, glucose levels, blood pressure, etc.
- **Customizable AI Models:** Customize the neural network and other algorithms by adjusting parameters, such as the number of layers, activation functions, and learning rates.

To use our website, follow these steps:

**Diabetes:**
1. Enter the relevant health parameters into the input fields.
2. Click on the "CHECK" to generate predictions.

**Model:**
1. Choose the AI model configuration or customize the settings according to your requirements.
2. Click on the "TEST" to generate results.
3. Review the results and analyze the performance metrics.

## Features 

### Diabetes Prediction

Our AI models utilize a combination of neural network to predict the risk of diabetes with high accuracy.

### Customizable AI Models

Users can customize the AI models by adjusting parameters such as the number of layers, activation functions, and iterations to optimize performance.

## Code

### Backend:

#### `src/app.py`
Backend using Flask framework containing two endpoints:

- `/diabetes/check`: This endpoint checks if a user has diabetes. It receives user data, passes it to the model, and predicts the presence of the disease.
- `/model/test`: Endpoint responsible for testing the user's created model. It receives parameters for MLP/GNB/DT model and returns training accuracy, testing accuracy of the model, and confusion matrix.

The application runs two models: 
- The main model for predicting diabetes
- The playground model for creating and editing custom models

#### `src/model_diabetes.py`
The model itself, consisting of a class with several fields and methods allowing manipulation of the model.

- **Constructor**: loads data from a CSV file and prepares it for training (scaling and splitting equally).
- The class allows for creating a neural network model with custom parameters and switching to GaussianNB and DecisionTree algorithms.
- Contains methods for:
  - Training the classifier
  - Returning model accuracies
  - Making predictions based on input data
  - Returning confusion matrices
  - Returning loss/error

#### `src/validation.py`
File containing validations for the above endpoints using the Marshmallow library.
- Validation includes required field types, value ranges, and returns appropriate messages if validation of a given field is not met during sending a request.

#### `data/diabetes.csv`
File containing data of patients examined for diabetes, which are used for training and testing the model.

### Frontend:

Frontend using React framework with Tailwind CSS. The application utilizes Axios for sending requests.

#### `src/components`
Contains components used to build the page, such as Header and custom inputs for user data entry.

#### `src/icons`
Directory containing all icons used on the site.

#### `src/pages`
Directory containing all application subpages, such as home, diabetes, and model.

#### `src/App.js`
Main component using React Router to create logic for subpages.

#### `src/App.css`
File containing application styles.