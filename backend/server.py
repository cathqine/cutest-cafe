from flask import Flask, jsonify
from player import Player
from werkzeug.utils import secure_filename
import xml.etree.ElementTree as ET # pip install elementpath
import pandas as pd

app = Flask(__name__)

player = Player()


@app.route("/home")
def home():
    return {player.levels, player.experience, player.money}


@app.route("/ingredients_run")
def ingredients_run():
    return {player.ingredients.values()}


@app.route("/kitchen")
def kitchen():
    return {player.ingredients.values()}


@app.route("/kitchen_oven")
def kitchen_oven():
    return {player.ingredients.values()}

@app.route('/ingredients_run', methods=['POST'])
def upload_file():
    print('ay')
    tree = ET.parse('/Users/rachel/Downloads/apple_health_export/export.xml') 
    # extract the attributes of health record
    root = tree.getroot()
    record_data = pd.DataFrame([x.attrib for x in root.iter('Record')])
    record_data_cleaned = record_data.drop(['sourceName','sourceVersion', 'device', 'creationDate','endDate'], axis=1)
    record_data_cleaned['startDate'] = pd.to_datetime(record_data_cleaned['startDate'], format='%Y-%m-%d %H:%M:%S %z')
    cutoff_datetime = pd.to_datetime('2024-06-28 20:00:00 +1000')

    filtered_df = record_data_cleaned[(record_data_cleaned['startDate'] > cutoff_datetime) & 
                                      (record_data_cleaned['type'] == 'HKQuantityTypeIdentifierStepCount')]
    filtered_df['value'] = pd.to_numeric(filtered_df['value'])

    print(filtered_df)
    print(sum(filtered_df['value']))
    # if 'file' not in request.files:
    #     return jsonify({"error": "No file part"}), 400

    # file = request.files['file']
    # if file.filename == '':
    #     return jsonify({"error": "No selected file"}), 400

    # if file:
    #     filename = secure_filename(file.filename)
    #     filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    #     file.save(filepath)

if __name__ == "__main__":
    #app.run(debug=True)
    upload_file()
