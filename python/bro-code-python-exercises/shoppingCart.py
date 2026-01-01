# just kidding, I've made a medieval merchant simulator

import time

#lists
supplies = []
prices = []
total = 0
elsePhrase = ""

while True:
  item = input(f"What{elsePhrase}'re ya buying? (r to retreat): ")
  if item.lower() == "r":
    if len(supplies) < 1:
      print("Be seeing ya...")
    break
  if item.lower() == "q":
    print("Pressed q outa habit, eh? We'll allow it", end="", flush=True)
    time.sleep(3)

    for x in ", this time":
      print(x, end="", flush=True)
      time.sleep(.1)
    time.sleep(.5)
    for x in "...":
      print(x, end="", flush=True)
      time.sleep(.6)
    print()
    break
  else:
    if item.lower() == "book":
      print("Wish I could read. ", end="", flush=True)
    gold = float(input(f"I guess I could part with that {item}. How many gold was it, again?: $ "))
    while gold < 5:
      gold = float(input(f"No haggling, what's the actual price? "))
    supplies.append(item)
    prices.append(gold)
    elsePhrase = " else"

if(len(supplies) > 0):
  print()
  print("There ya go, and your ledger")
  print("-------------------")
  for item in supplies:
    print(item)
  print("-------------------")

  for price in prices:
    total += price

  print(f"That'll be {gold} gold")