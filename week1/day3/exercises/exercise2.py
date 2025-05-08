class Dog:
    def __init__(self,name,height):
        self.name = name
        self.height = height
    
    def bark(self):
        print( self.name +" " "woof!!")
    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()


if sarahs_dog.height > davids_dog.height:
    print(f"sarah's dog is bigger {sarahs_dog.name} pas pouge")
elif sarahs_dog.height < davids_dog.height:
    print(f"david's dog is bigger {davids_dog.name} pas pouge")
else:
    print("both dogs are the same height")