from flask import Flask, render_template
import os

app = Flask(__name__, template_folder='.', static_folder='assets')

try:
    with app.app_context():
        # Attempt to render the template with a dummy token
        rendered = render_template('index.html', coze_token='TEST_TOKEN')
        print("SUCCESS: Template rendered successfully.")
except Exception as e:
    print(f"FAILURE: {e}")
