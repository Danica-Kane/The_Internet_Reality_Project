# IMPORT FLASK AND FLASK MAIL
from flask import Flask, redirect, render_template, request, url_for
from flask_mail import Mail, Message

# SET UP INITAL RENDER COMANDS
app = Flask(__name__, static_url_path='/static')
mail = Mail(app) 

# CONFIGERATION OF MAIL
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'internetrealiltyproject@gmail.com'
app.config['MAIL_PASSWORD'] = 'aojljdgwqpmammup'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

subscribers = []

# RENDER PAGES
@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/api/templates/Contact.html' , methods=['GET', 'POST'])
def Contact():
    return render_template('Contact.html')

@app.route('/api/templates/Education.html' , methods=['GET', 'POST'])
def Education():
    return render_template('Education.html')

@app.route('/api/templates/Game.html' , methods=['GET', 'POST'])
def Game():
    return render_template('Game.html')


@app.route('/api/templates/form.html', methods=['POST'])
def form():
    # get form contents
    email_adress = request.form.get("email_adress")
    subject_line = request.form.get("subject_line")
    your_message = request.form.get("your_message")

    subscribers.append(f"{email_adress} | {subject_line} | {your_message}")

    # send form contents to email recipients
    if request.method == "POST":
        msg = Message(
                subject_line,
                sender = 'internetrealiltyproject@gmail.com',
                recipients = ['internetrealiltyproject@gmail.com', email_adress]
               )
        msg.body = 'This is a copy of your email to internetrealiltyproject@gmail.com \n \n' + email_adress + ' says : ' + your_message
        mail.send(msg)

        

    # PRACTICE FORM LIST ----
    # return render_template('form.html', subscribers=subscribers)
    # -----------------------
    
    return redirect("/api/templates/Contact.html", code=302)

# RUN APP
if __name__ == "__main__":
    app.run(debug=True)

