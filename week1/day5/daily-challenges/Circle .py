import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Must provide either radius or diameter")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius: {self.radius}, diameter: {self.diameter}, area: {self.area:.2f}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __gt__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius



circle1 = Circle(radius=3)
circle2 = Circle(diameter=8)

print(circle1)
print(circle2)

circle3 = circle1 + circle2
print(circle3)

print("circle1 > circle2:", circle1 > circle2)
print("circle1 == circle2:", circle1 == circle2)

circle_list = [circle1, circle2, circle3]
circle_list.sort()  
for c in circle_list:
    print(c)
