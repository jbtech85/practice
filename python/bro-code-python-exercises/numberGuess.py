# number guessing game
import random

lowest_num = 0
highest_num = 1000
answer = random.randint(lowest_num, highest_num)
guesses = 0
app_running = True


print("Python Integer guessing game")
print(f"Select a number between {lowest_num} and {highest_num}")

while app_running:

  guess = input("What is the random integer: ")

  if guess.isdigit():
    guess = int(guess)
    guesses += 1

    if guess < lowest_num or guess > highest_num:
      print("That number is out of range")
      print(f"Select a number between {lowest_num} and {highest_num}")
    elif guess < answer:
      print("Too low, try again")
    elif guess > answer:
      print("Too high, try again")
    else:
      print(f"That's right! The answer was {answer}")
      print(f"It only took you {guesses} guesses!")

  else:
    print("Needs to be an Integer")
    print(f"Select a number between {lowest_num} and {highest_num}")
    