from inventory import Inventory


class Player:
    def __init__(self):
        self.levels = 0
        self.experience = 0
        self.money = 0
        self.inventory = Inventory()
