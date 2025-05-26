from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

import random

@app.route("/")
def index():
    return render_template("index.html")

@app.route( methods=["POST"])
def get1():
    values = ['bbleu', 'bjaune', 'brouge', 'bverte','bnoir','bblanche']
    probabilities = [0.1, 0.01, 0.2, 0.6, 0,045, 0,045]
    chosen_value = random.choices(values, weights=probabilities, k=1)[0]
        return jsonify(chosen_value)

if __name__ == "__main__":
    app.run(debug=True)
