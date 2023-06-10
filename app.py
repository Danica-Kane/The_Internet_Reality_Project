from flask import Flask, render_template, request, url_for
from flask_mail import Mail, Message
import os
import ssl
ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)

#-------------

app = Flask(__name__, static_url_path='/static')
app.config['MAIL_SERVER'] = 'smtp.office365.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'internetrealityproject@outlook.com'
app.config['MAIL_PASSWORD'] = 'odrloeaxydgowyoj'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

#--------

subscribers = []

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


@app.route('/templates/form.html', methods=['POST'])
def form():
    first_name = request.form.get("first_name")
    last_name = request.form.get("last_name")
    email_adress = request.form.get("email_adress")

    subscribers.append(f"{first_name} {last_name} | {email_adress}")

    msg = Message("hey", sender='internetrealityproject@outlook.com', 
                    recipients=['internetrealityproject@outlook.com'])
    msg.body = "hey there just testing this email"
    mail.send(msg)

    return render_template('form.html', subscribers=subscribers)
if __name__ == "__main__":
    app.run(debug=True)

