## Flask app

from flask import Flask, request, render_template
from assistant.jarvis import Jarvis

app = Flask(__name__)
jarvis = Jarvis()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        command = request.form['command']
        response = jarvis.respond(command)
        return render_template('index.html', command=command, response=response)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)