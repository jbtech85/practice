# convert pounds to kilograms or vice versa

weight = float(input("Enter your weight: "))
unit = input("Kilograms or Pounds? (K or L): ")

# if user enters K
if unit == "K":
  # multiply the entered weight
  weight = weight * 2.205
  # and set converted weight unit to pounds (Lbs.)
  unit = "Lbs."
  print(f"Your weight is: {round(weight, 2)} {unit}")
# if user enters L
elif unit == "L":
  # divide the entered weight
  weight = weight / 2.205
  # and set converted weight unit to kilograms (Kgs.)
  unit = "Kgs."
  print(f"Your weight is: {round(weight, 2)} {unit}")
else:
  print(f"{unit} is not a valid input")

