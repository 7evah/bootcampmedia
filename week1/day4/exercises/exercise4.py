class Family:
    def __init__(self, last_name, members=None):
        self.last_name = last_name
        self.members = members if members is not None else []

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f" Congratulations on the birth of {kwargs['name']} in the {self.last_name} family!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False  

    def family_presentation(self):
        print(f"\n The {self.last_name} Family:")
        for member in self.members:
            print(member)


members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

my_family = Family("Smith", members)


my_family.family_presentation()
print("\nIs Michael 18 or older?", my_family.is_18("Michael"))


my_family.born(name='Emma', age=1, gender='Female', is_child=True)


my_family.family_presentation()


class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is: {member.get('power')}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power.")

    def incredible_presentation(self):
        print("\n Here is our powerful family ")
        super().family_presentation()



incredible_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]


incredibles = TheIncredibles("Incredibles", incredible_members)


incredibles.incredible_presentation()


incredibles.born(name='Jack', age=2, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')

incredibles.incredible_presentation()


incredibles.use_power("Michael") 

try:
    incredibles.use_power("Jack") 
except Exception as e:
    print("⚠️", e)
