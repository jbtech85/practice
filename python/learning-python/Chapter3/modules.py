
import math

sqrtNum = 64
# print(f"Square root of {sqrtNum} is {math.sqrt(sqrtNum)}")

from math import pi
# print("How much Pi will we get? ", round(pi,3))

import random as rando
# print(rando.randint(0, 20))

from tabulate import tabulate

sampleData = [
  ["Product", "Price", "Stock"],
  ["Laptop", 800.99, 20],
  ["Mouse", 30.00, 500],
  ["Keyboard", 60.95, 12]
]

print(tabulate(sampleData, headers="firstrow", tablefmt="rounded_grid"))