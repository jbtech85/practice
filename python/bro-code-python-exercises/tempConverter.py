
temp = float(input("Enter a temperature: "))
unit = input("Was that temperature in Celsius or Fahrenheit? (C/F): ")

if unit == "C":
  convertedTemp = round((9 * temp) / 5 + 32, 1)
  print(f"The temperature in Fahrenheit is: {convertedTemp}°F")
elif unit == "F":
  convertedTemp = round((temp - 32) * 5 / 9, 1)
  print(f"The temperature in Celsius is: {convertedTemp}°C")
else:
  print(f"{unit} is not a valid entry")