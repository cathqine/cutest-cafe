from flask import Flask, jsonify, request
from player import Player
from werkzeug.utils import secure_filename
import xml.etree.ElementTree as ET # pip install elementpath
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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

# submit button in ingredients run
@app.route('/ingredients-run', methods=['POST'])
def get_ingredient():
    ingredient = request.json.get('data')
    print(ingredient)
    return ingredient

@app.route('/ingredients_run', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

    tree = ET.parse(filepath) 
    root = tree.getroot()
    record_data = pd.DataFrame([x.attrib for x in root.iter('Record')])
    record_data_cleaned = record_data.drop(['sourceName','sourceVersion', 'device', 'creationDate','endDate'], axis=1)
    record_data_cleaned['startDate'] = pd.to_datetime(record_data_cleaned['startDate'], format='%Y-%m-%d %H:%M:%S %z')
    cutoff_datetime = pd.to_datetime('2024-06-28 20:00:00 +1000')
    filtered_df = record_data_cleaned[(record_data_cleaned['startDate'] > cutoff_datetime) & 
                                      (record_data_cleaned['type'] == 'HKQuantityTypeIdentifierStepCount')]
    filtered_df['value'] = pd.to_numeric(filtered_df['value'])

    ingredient = get_ingredient()

    ingredient_to_step = {
        "flour": 100,
        "milk": 100,
        "sugar": 200,
    }

    number_of_ingredients = int(sum(filtered_df['value'])/ingredient_to_step[ingredient])
    player.acquire_ingredients(ingredient = number_of_ingredients)
    return {number_of_ingredients}

#click on inventory ingredient
@app.route('/kitchen/....', methods=['POST'])
def put_ingredient():
    ingredient = request.json
    player.ingredients[ingredient] -= 1
    return {player.ingredients.values()}


if __name__ == "__main__":
    app.run(debug=True)