from flask import Flask, request, abort, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return "Test"

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)