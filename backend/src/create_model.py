import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score
from sklearn import tree
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import confusion_matrix
from imblearn.over_sampling import RandomOverSampler
import joblib
from sklearn.model_selection import GridSearchCV

df = pd.read_csv("../data/diabetes.csv")

X = df[df.columns[:-1]].values
y = df[df.columns[-1]].values

over = RandomOverSampler()
X, y = over.fit_resample(X, y)

scaler = StandardScaler()
X = scaler.fit_transform(X)

data = np.hstack((X, np.reshape(y, (-1, 1))))
transformed_df = pd.DataFrame(data, columns=df.columns)
# print(len(transformed_df[transformed_df['Outcome']==1]), len(transformed_df[transformed_df['Outcome']==0]))

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)

# my model
layer_sizes = (6,3)
new_layer_size = tuple(3 for _ in range(4)) + layer_sizes 
mlp = MLPClassifier(hidden_layer_sizes=(8,8,8,8,3), max_iter=10000, solver="lbfgs", activation="relu", learning_rate_init=0.001, learning_rate="adaptive", alpha=0.01)
mlp.fit(X_train, y_train)
predictions_train = mlp.predict(X_train)
print("Training accuracy:", accuracy_score(predictions_train, y_train))
predictions_test = mlp.predict(X_test)
print("Testing accuracy:", accuracy_score(predictions_test, y_test))

# grid (testing if grid is better thann my model)
parameters = {
    'hidden_layer_sizes': [(8, 8, 8, 8, 3), (64, 32, 16, 8, 3), (16, 8, 8, 8, 3)],
    'activation': ['relu', 'tanh', 'logistic'],
    'solver': ['adam', 'lbfgs', 'sgd'],
    'alpha': [0.0001, 0.001, 0.01, 0.1],
}

grid_search = GridSearchCV(MLPClassifier(max_iter=10000), parameters, n_jobs=-1, cv=3)
grid_search.fit(X_train, y_train)

best_parameters = grid_search.best_params_
print("Best Parameters:", best_parameters)

best_mlp = grid_search.best_estimator_
predictions_train = best_mlp.predict(X_train)
print("Training accuracy:", accuracy_score(predictions_train, y_train))
predictions_test = best_mlp.predict(X_test)
print("Testing accuracy:", accuracy_score(predictions_test, y_test))
# joblib.dump(mlp, 'mlp_model.pkl')