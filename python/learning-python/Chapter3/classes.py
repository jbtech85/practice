
class Vehicle:
  def __init__(self, bodystyle):
    self.bodystyle = bodystyle

  def drive(self, speed):
    self.mode = "driving"
    self.speed = speed


class Car(Vehicle):
  def __init__(self, enginetype):
    super().__init__("Car")
    self.wheels = 4
    self.doors = 4
    self.enginetype = enginetype

  def drive(self, speed):
    super().drive(speed)
    print(f"I'm {self.mode} my {self.enginetype} Car at {self.speed} mph")


class Motorcycle(Vehicle):
  def __init__(self, enginetype, hassidecar):
    super().__init__("Motorcycle")
    if(hassidecar):
      self.wheels = 3
    else:
      self.wheels = 2
    
    self.doors = 0
    self.enginetype = enginetype
    
  def drive(self, speed):
    super().drive(speed)
    print(f"I'm {self.mode} my {self.enginetype} {self.bodystyle} at {self.speed} mph")


car1 = Car("gas")
car2 = Car("electric")
mc1 = Motorcycle("gas", True)

print(car1.bodystyle)
print(car1.doors)
print(mc1.wheels)
print(mc1.enginetype)
car2.drive(40)
mc1.drive(50)