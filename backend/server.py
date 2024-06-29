from flask import Flask
from player import Player

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


if __name__ == "__main__":
    app.run(debug=True)
