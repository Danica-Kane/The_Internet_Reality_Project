from flask import Flask, render_template, request, url_for
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


@app.route('/templates/form.html', methods=['POST'])
def form():
    first_name = request.form.get("first_name")
    last_name = request.form.get("last_name")
    email_adress = request.form.get("email_adress")

    return render_template('form.html', first_name=first_name, last_name=last_name, email_adress=email_adress)
if __name__ == "__main__":
    app.run(debug=True)

