from flask import Flask, redirect, render_template, request, url_for
from flask_mail import Mail, Message


#-------------

app = Flask(__name__, static_url_path='/static')

mail = Mail(app) 

# configuration of mail
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'internetrealiltyproject@gmail.com'
app.config['MAIL_PASSWORD'] = 'aojljdgwqpmammup'
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
    email_adress = request.form.get("email_adress")
    subject_line = request.form.get("subject_line")
    your_message = request.form.get("your_message")

    subscribers.append(f"{email_adress} | {subject_line} | {your_message}")

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
    
    return redirect("/templates/Contact.html", code=302)

if __name__ == "__main__":
    app.run(debug=True)

