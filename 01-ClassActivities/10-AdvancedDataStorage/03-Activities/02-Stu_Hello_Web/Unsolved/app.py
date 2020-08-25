from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello world!"

@app.route("/about")
def about():
    name = "Pat"
    location = "Portland"
    return f"My name is {name} from {location}"

@app.route("/contact")
def contact():
    email = "bluedude454@gmail.com"
    return f"If you have any concerns, don't hesitate to reach out to me at {email}"

if __name__ == "__main__":
    app.run(debug=True)
