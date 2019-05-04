import os
from app import app
from flask import render_template, request, redirect, url_for # added url_for, session
from bson.objectid import ObjectId # added for page/post
from dotenv import load_dotenv # added for environment variables
from flask_pymongo import PyMongo
import urllib

# ? https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xvi-full-text-search ?

# load environment variables in .env
load_dotenv()
# store environment variables
USER = os.getenv("MONGO_USERNAME")
PASSWORD = os.getenv("MONGO_PASSWORD")

# set some random secret key for session
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

app.config['MONGO_DBNAME'] = 'game-of-thrones' # name of database
app.config['MONGO_URI'] = 'mongodb+srv://'+USER+':'+PASSWORD+'@jeffreylancaster-kxrbn.mongodb.net/game-of-thrones?retryWrites=true'

mongo = PyMongo(app)

@app.route('/')
@app.route('/index', methods=['GET', 'POST'])

def index():
    if request.method == "GET":
        return render_template('index.html')
    else:
        query = request.form['query']
        
        collection = mongo.db.script
        script = collection.find(
            {"$text": {"$search": query}},
            {"score": {"$meta": "textScore"}}
        ).limit(1000)
        # .sort("score": {"$meta": "textScore"})
        
        count = script.count(False)
        num = script.count(True)
        
        return render_template('index.html', script = script, count = count, num = num )
        
# SPEAKER PAGE

@app.route('/name')
@app.route('/name/')

def nameRedirect():
    return redirect('/')

@app.route('/name/<name>')

def name(name):
    collection = mongo.db.script
    script = collection.find(
        {"name": name}
    ).limit(1000)
    # .sort("score": {"$meta": "textScore"})
    
    count = script.count(False)
    num = script.count(True)
    
    return render_template('speaker.html', script = script, count = count, num = num, name = name)
