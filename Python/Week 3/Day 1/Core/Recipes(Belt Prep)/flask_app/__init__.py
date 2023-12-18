from flask import Flask

DB = "recipes_schema"

app = Flask(__name__)
app.secret_key = "shhhhhh"
