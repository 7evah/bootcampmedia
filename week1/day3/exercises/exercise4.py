
import string   

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.grouped_animals = {}

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(f"\nAnimals in {self.name}:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        self.grouped_animals = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in self.grouped_animals:
                self.grouped_animals[first_letter] = [animal]
            else:
                self.grouped_animals[first_letter].append(animal)

    def get_groups(self):
        print(f"\nGrouped animals in {self.name}:")
        sorted_keys = sorted(self.grouped_animals.keys())
        for idx, key in zip(string.ascii_uppercase, sorted_keys):
            print(f"{idx}: {self.grouped_animals[key]}")




new_york_zoo = Zoo("New York Zoo")


new_york_zoo.add_animal("Zebra")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Antelope")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Baboon")

new_york_zoo.get_animals()
new_york_zoo.sell_animal("Zebra")


new_york_zoo.get_animals()
new_york_zoo.sort_animals()


new_york_zoo.get_groups()

