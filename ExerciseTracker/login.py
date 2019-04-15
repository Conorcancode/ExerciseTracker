from flask import(
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from flask import current_app as app
from . import db

bp = Blueprint('login', __name__, url_prefix='/login')

@bp.route('/', methods=('GET', 'POST'))
def register():
    if request.method == 'POST':
        username = request.form['username']

        error = None

        if not username:
            error = 'Username is required.'
        elif db.user_search(app.config, username) is True:
            error = 'Username is already taken'
        
        if error is None:
            db.add_user(app.config, username)
            return redirect(url_for('dashboard.dashboard'))

        flash(error)
        print(error)
    return render_template('login.html')