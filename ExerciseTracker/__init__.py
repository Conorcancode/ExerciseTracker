from flask import Flask
import os

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_mapping(
        SECRET_KEY = 'dev'
    )
    if test_config is None:
        app.config.from_pyfile('../instance/config.cfg')
    else:
        app.config.from_pyfile('test_config.py')


    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    from . import login
    app.register_blueprint(login.bp)

    from . import dashboard
    app.register_blueprint(dashboard.bp)

    return app