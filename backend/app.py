from flask import Flask, send_from_directory
import os

# Указываем точный путь к build
app = Flask(__name__, static_folder=r'C:\Users\kater\Desktop\колыбель для кошки\банкротство\prototype\my_web_app\frontend\build', static_url_path='')

@app.route('/')
def serve():
    index_path = os.path.join(app.static_folder, 'index.html')
    print(f"Looking for index.html at: {index_path}")  # Отладочное сообщение
    if os.path.exists(index_path):
        return send_from_directory(app.static_folder, 'index.html')
    else:
        return f"React build not found at {index_path}. Please run 'npm run build' in the frontend directory.", 404

@app.route('/<path:path>')
def serve_static_files(path):
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        return "File not found.", 404

if __name__ == '__main__':
    app.run(debug=True)
