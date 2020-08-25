from flask import Flask, jsonify


app = Flask(__name__)

hello_dict = [{"Hello": "World!"},{"Hello":"Portland!"}]


@app.route("/")
def home():
    return "Hi, I am here!"


@app.route("/normal")
def normal():
    return hello_dict


@app.route("/jsonified")
def jsonified():
    return jsonify(hello_dict)


if __name__ == "__main__":
    app.run(debug=True)
