from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return {
        "message": "Hello from app!"
    }

if __name__ == '__main__':
    app.run(debug=True)