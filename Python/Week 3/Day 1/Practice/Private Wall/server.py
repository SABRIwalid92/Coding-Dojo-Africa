from flask_app import app

#                ================ ADD CONTROLLERS ===========================
# >>>>>>>>>>>>>>        from flask_app.controllers import controller     <<<<<<<<<<<<<<<<<<<


from flask_app.controllers import users_controller

if __name__ == "__main__":
    app.run(debug=True)
