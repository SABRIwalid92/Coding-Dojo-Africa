from flask import Flask


DB = "emails_db"

app = Flask(__name__)
app.secret_key = "shhhhhh"
