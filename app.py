from flask import Flask, render_template, url_for

app = Flask(__name__, static_url_path='/static')


MAIL_SERVER : 127.0.0.1:5000
MAIL_PORT :  25
MAIL_USE_TLS : False
MAIL_USE_SSL : False
MAIL_DEBUG : app.debug
MAIL_USERNAME : None
MAIL_PASSWORD : None
MAIL_DEFAULT_SENDER : None
MAIL_MAX_EMAILS : None
MAIL_SUPPRESS_SEND : app.testing
MAIL_ASCII_ATTACHMENTS : False

#add pages here
@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/templates/Contact.html' , methods=['GET', 'POST'])
def Contact():
    return render_template('Contact.html')

@app.route('/templates/Education.html' , methods=['GET', 'POST'])
def Education():
    return render_template('Education.html')

@app.route('/templates/Game.html' , methods=['GET', 'POST'])
def Game():
    return render_template('Game.html')


if __name__ == "__main__":
    app.run(debug=True)

