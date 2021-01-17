from flask import Flask, request, abort, jsonify
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

new_message = None

@socketio.on('json')
def handle_json(json):
    incoming_message = json.loads(message)
    global new_message
    new_message = incoming_message['text']

@app.route('/')
def index():
    return "Test"

@app.route('/query', methods=['POST'])
def query():
    req = request.get_json()
    model_response = {'id': 'Model', 'episode_done': False}
    model_response['text'] = new_message
    json_str = json.dumps(model_response)

if __name__ == '__main__':
    socketio.run(app, host='localhost', port=8000, debug=True)