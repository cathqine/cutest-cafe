class Player:
    def __init__(self):
        self.levels = 0
        self.experience = 0
        self.money = 0
        self.ingredients = {
            "flour": 0,
            "milk": 0,
            "strawberries": 0,
            "eggs": 0,
            "sugar": 0,
            "nuts": 0,
            "chocolate": 0,
        }

    # expects keyword arguments where the values are numbers
    # the numbers are how many of the respective ingredient was used
    def use_ingredients(self, **ingredients_used):
        try:
            for ingredient, amount_used in ingredients_used.values():
                self.ingredients[ingredient] -= amount_used
        # not actually sure what to do if these errors occur
        except TypeError:
            return False
        except KeyError:
            return False

    def acquire_ingredients(self, **ingredients_acquired):
        try:
            for ingredient, amount_acquired in ingredients_acquired.values():
                self.ingredients[ingredient] += amount_acquired
        # not actually sure what to do if these errors occur
        except TypeError:
            return False
        except KeyError:
            return False
