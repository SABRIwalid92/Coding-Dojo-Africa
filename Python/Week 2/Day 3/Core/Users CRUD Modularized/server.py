from flask_app import app

#                ================ ADD CONTROLLERS ===========================
# >>>>>>>>>>>>>>        from flask_app.controllers import controller.py     <<<<<<<<<<<<<<<<<<<
from flask_app.controllers import users

if __name__ == "__main__":
    app.run(debug=True)
