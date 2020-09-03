from flask import Flask, render_template, redirect, url_for
import pymongo
import insert_data

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.store_inventory
produce = db.produce


@app.route("/")
def index():
    # write a statement that finds all the items in the db and sets it to a variable
    inventory = list(produce.find())
    print(inventory)

    # render an index.html template and pass it the data you retrieved from the database
    return render_template("index.html", inventory=inventory)

@app.route("/insert")
def insert_all():
    # run the function to insert all the data by passing the collection
    insert_data.insert_all(produce)

    # once complete redict to the homepage
    return redirect(url_for('index'))

@app.route("/delete")
def delete_all():
    produce.remove({})
    return redirect(url_for('index'))


if __name__ == "__main__":
    app.run(debug=True)
