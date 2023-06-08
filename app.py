from flask import Flask, render_template, url_for
import smtplib
app = Flask(__name__, static_url_path='/static')

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

