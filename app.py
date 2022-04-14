
import os
import random
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from bson.objectid import ObjectId
from flask_pymongo import PyMongo
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
# app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
# app.secret_key = os.environ.get("SECRET_KEY")
# pip3 install "pymongo[srv]"
# pip3 install python-dotenv

# app.config["MONGO_DBNAME"] = "coep_cars"
app.config["MONGO_URI"] = "mongodb+srv://robertTheUser:r00tUser@myfirstcluster.3kydg.mongodb.net/coep_cars?retryWrites=true&w=majority"
app.secret_key = "rqP+bGT)p[kK<OBi5[Ph?6G(fqHte?"


mongo = PyMongo(app)


@app.route("/")
def index():
    produkte = list(mongo.db.cars.find())
    return render_template("index.html", produkte=produkte)


@app.route("/produkt/<produkt_id>")
def produkt(produkt_id):
    produkt = mongo.db.cars.find_one({"_id": ObjectId(produkt_id)})
    return render_template(
        "produkt.html", produkt=produkt)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
