from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, template_folder='.', static_folder='assets')

@app.route('/')
def home():
    # Get Token from Env (Production) or use Placeholder (Local)
    coze_token = os.environ.get('COZE_TOKEN', 'pat_PLACEHOLDER_FOR_LOCAL_DEV')
    return render_template('index.html', coze_token=coze_token)

# Static files routes
@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory('assets', path)

@app.route('/img/<path:path>')
def send_img(path):
    # Fallback for img references if any
    return send_from_directory('img', path)

if __name__ == '__main__':
    # Standard Port Handling for Zeabur
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
