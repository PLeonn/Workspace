from flask import Flask, render_template
import pymongo
import insert_data

app = Flask(__name__)

# @TODO: setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# @TODO: connect to mongo db and collection
db = client.store_inventory
coll = db.produce

@app.route('/')
def index():
    # @TODO: write a statement that finds all the items in the db and sets it to a variable
    results = list(coll.find())

    print(results)
    
    # @TODO: render an index.html template and pass it the data you retrieved from the database
    return render_template('index.html', list=results)


if __name__ == "__main__":
    app.run(debug=True)
