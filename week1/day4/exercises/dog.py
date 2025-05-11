class Dog:
    def __init__(self,name,age,weight):
        self.name = name
        self.weight = weight
        self.age = age
    
    def bark(self):
        return f'{self.name} is barking'
    def run_speed(self):
        return (self.weight / self.age) * 10
    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} won the fight against {other_dog.name}"
        elif my_power < other_power:
            return f"{other_dog.name} won the fight against {self.name}"
        else:
            return "It's a tie!"