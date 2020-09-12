from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# @TODO: setup mongo connection
conn = "mongodb://localhost:27017"

# @TODO: connect to mongo db and collection
client = pymongo.MongoClient(conn)
db = client.fruit_db
coll = db.produce
def insert_all(coll): 
    produce.insert_many(
        [
            {
                "type": "apples",
                "cost": .23,
                "stock": 333
            },
            {
                "type": "oranges",
                "cost": .45,
                "stock": 30
            },
            {
                "type": "kiwi",
                "cost": .10,
                "stock": 1000
            },
            {
                "type": "mango",
                "cost": 1.30,
                "stock": 20
            },
            {
                "type": "berries",
                "cost": 2.99,
                "stock": 99
            }
        ]
    )
    print("Data Uploaded!")