import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from imblearn.over_sampling import RandomOverSampler
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix

from sklearn.naive_bayes import GaussianNB
from sklearn import tree
import matplotlib.pyplot as plt

class ModelDiabetes:

    def __init__(self):
        print("[INFO] init")

        self.df = pd.read_csv("../data/diabetes.csv")
        self.X = self.df[self.df.columns[:-1]].values
        self.y = self.df[self.df.columns[-1]].values

        scaler = StandardScaler()
        self.X = scaler.fit_transform(self.X)

        over = RandomOverSampler()
        self.X, self.y = over.fit_resample(self.X, self.y)

        print("[INFO] prepare")
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(self.X, self.y, test_size=0.3, random_state=285774)


    def createMLP(self, layers=(6, 3), iterations=3000, solver="adam", activation="identity", learning_rate_init=0.01, learning_rate="constant", alpha=0.01):
        print("[INFO] create MLPClassifier")
        self.model = MLPClassifier(hidden_layer_sizes=layers, max_iter=iterations, solver=solver, activation=activation, learning_rate_init=learning_rate_init, learning_rate=learning_rate, alpha=alpha)


    def createGaussianNB(self):
        print("[INFO] create GaussianNB")
        self.model = GaussianNB()


    def createDecisionTree(self):
        print("[INFO] create DecisionTree")
        self.model = tree.DecisionTreeClassifier()


    def train(self):
        print("[INFO] training...")
        self.model.fit(self.X_train, self.y_train)
    

    def accuracy(self):
        self.train_prediction = self.model.predict(self.X_train)
        self.test_prediction = self.model.predict(self.X_test)
        training_accuracy = accuracy_score(self.train_prediction, self.y_train)
        test_accuracy = accuracy_score(self.test_prediction, self.y_test)
        print("Training accuracy:", training_accuracy)
        print("Testing accuracy:", test_accuracy)
        return {
            "training_accuracy": round(training_accuracy, 2),
            "test_accuracy": round(test_accuracy, 2)
        }
    
    
    def prediction(self, data):
        result = self.model.predict(data)
        return result


    def confusionMatrix(self):
        conf_matrix = confusion_matrix(self.y_test, self.test_prediction)
        print(conf_matrix)
        return conf_matrix
