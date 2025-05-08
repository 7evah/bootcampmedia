class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

first_cat = Cat("gatto", 10)
second_cat = Cat("milo",3)

print(first_cat.name)
print(first_cat.age)

print(second_cat.name)
print(second_cat.age)