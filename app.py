from flask import Flask, send_from_directory, render_template
import os

DEV = False
PORT = 5000

app = Flask(__name__, static_folder='./frontend/dist')

if DEV is False:
    
    @app.route('/')
    def serve():
        return send_from_directory(app.static_folder, 'index.html')

    @app.route('/<path:path>')
    def static_proxy(path):
        file_path = os.path.join(app.static_folder, path)
        if os.path.isfile(file_path):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=DEV, host='0.0.0.0', port=PORT)
