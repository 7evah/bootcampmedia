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

dog1 = Dog("Rex", 5, 20)
dog2 = Dog("doggo", 3, 15)
dog3 = Dog("spike", 4, 25)

print(dog1.bark())
print(f"{dog1.name}'s run speed: {dog1.run_speed()}")

print(dog2.bark())
print(f"{dog2.name}'s run speed: {dog2.run_speed()}")

print(dog3.bark())
print(f"{dog3.name}'s run speed: {dog3.run_speed()}")


print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))
 