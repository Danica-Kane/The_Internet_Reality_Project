from flask import Flask, render_template, url_for

app = Flask(__name__)

#add pages here
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/templates/new_page.html')
def new_page():
    return render_template('new_page.html')


if __name__ == "__main__":
    app.run(debug=True)

