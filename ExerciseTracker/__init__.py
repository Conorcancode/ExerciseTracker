from flask import Flask

def create_app(config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev'
    )
    
    if config is None:
        #load dev config
        app.config.from_pyfile('configs/dev_config.py', silent=True)
    elif config is 'test':
        #load test config
        app.config.from_pyfile('configs/test_config.py')
    else:
        #load production config
        app.config.from_pyfile('configs/prod_config.py')

    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    return app