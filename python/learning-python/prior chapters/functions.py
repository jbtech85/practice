
# def color_question_fn():
#   print("Color Questionnaire")
#   color = input("What's your favorite color? ")
#   print(f"I like {color} too!")

# color_question_fn()


def hello_fn(greeting):
  name = input("What is your name? ")
  print(f"{greeting} {name}?")

# hello_fn("How's it going")

def cube(num):
  return num * num * num

cubed = cube(4)
# print(cubed)


def hello_fn2(greeting, name=None):
  if name == None:
    name = input("What is your name? ")

  print(f"{greeting} {name}?")


# hello_fn2("What's up", "Josh")
# hello_fn2(name="Jausche", greeting="What's up")


def multi_add(*args):
  result = 0
  for a in args:
    result += a
  return result

total = multi_add(1, 2, 3, 4)
print(total)
print(multi_add(2, 4, 6, 8))

def multi_add2(initial, *args):
  result = initial
  for a in args:
    result += a
  return result

print(multi_add2(20, 1, 2, 3, 4))