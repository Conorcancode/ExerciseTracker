from flask import(
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

bp = Blueprint('dashboard', __name__, url_prefix='/dashboard')

@bp.route('/', methods=('GET', 'POST'))
def dashboard():
    # print(request.form.to_dict())
    return render_template('dashboard.html')