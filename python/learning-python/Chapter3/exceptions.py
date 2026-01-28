# let's break stuff

# x = 10 / 0

# try:
#   x = 10 / 0
# except:
#   print("The universe won't allow it")

try:
  answer = input("What will we divide 10 by? ")
  num = int(answer)
  print(10 / num)
except ZeroDivisionError as z:
  print("Can't divid by zero")
except ValueError as v:
  print("Entry needs to be a number")
  print(v) # just for funsies
finally:
  print("Here we are at finally")