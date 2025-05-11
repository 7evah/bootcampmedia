
from dog import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dog_names):
        names = ", ".join(dog_names)
        print(f"{self.name}, {names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll.",
                f"{self.name} stands on his back legs.",
                f"{self.name} shakes your hand.",
                f"{self.name} plays dead."
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet!")




dog1 = PetDog("Buddy", 3, 15)
dog2 = PetDog("Max", 4, 20)
dog3 = PetDog("Luna", 2, 10)

dog1.train()
dog1.play(dog2.name, dog3.name)
dog1.do_a_trick()