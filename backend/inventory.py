class Inventory:
    def __init__(self):
        self.flour = 0
        self.milk = 0
        self.strawberries = False
        self.sugar = False
        self.nuts = False
        self.chocolates = False

    def use_ingredients(
        self, flour=0, milk=0, strawberries=0, sugar=0, nuts=0, chocolates=0
    ):
        self.flour -= flour
        self.milk -= milk
        self.strawberries -= strawberries
        self.sugar -= sugar
        self.nuts -= nuts
        self.chocolates -= chocolates
