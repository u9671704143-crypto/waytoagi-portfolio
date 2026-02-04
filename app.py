from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, template_folder='.', static_folder='assets')

@app.route('/')
def home():
    # Fetch token from Environment Variable, fallback to placeholder if not set
    coze_token = os.environ.get('COZE_TOKEN', 'pat_PLACEHOLDER_FOR_LOCAL_DEV')
    return render_template('index.html', coze_token=coze_token)

# Route for CSS
@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

# Route for JS
@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

# Route for Assets
@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory('assets', path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
