import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///../Resources/chinook.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to the tables
Invoices = Base.classes.invoices
Items = Base.classes.invoice_items

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

## YOUR CODE HERE ########

@app.route("/")
def welcome():
    # <a href='/api/v1.0/justice-league'> http://127.0.0.1:5000/api/v1.0/justice-league </a>
    return "Hello"

@app.route("/billing_countries")
def billing_countries():
    session = Session(engine)
    results = session.query(Invoices.BillingCountry).group_by(Invoices.BillingCountry).all()
    session.close()

    all_results = list(np.ravel(results))
    return jsonify(all_results)

@app.route("/invoices_total")
def invoices_total():
    session = Session(engine)
    results = session.query(Invoices.BillingCountry, func.sum(Invoices.Total)).group_by(Invoices.BillingCountry).order_by(func.sum(Invoices.Total).desc()).all()
    session.close()
    
    all_results = []
    for x in results:
        item_dict = {}
        item_dict["country"] = x[0]
        item_dict["total"] = float(x[1])
        all_results.append(item_dict)
    return jsonify(all_results)
    
@app.route("/postal_codes")
def postal_codes():
    session = Session(engine)
    results = session.query(Invoices.BillingPostalCode).filter(Invoices.BillingCountry == 'USA').group_by(Invoices.BillingPostalCode).all()
    session.close()

    results = list(np.ravel(results))
    return jsonify(results)

# @app.route("/agg_total")
# def agg_total():
#     return 

# @app.route("/item_totals")
# def item_totals():
#     return 

if __name__ == '__main__':
    app.run(debug=True)
