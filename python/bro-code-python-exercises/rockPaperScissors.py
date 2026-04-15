import random

# tuple, because we aren't changing it
options = ("rock", "paper", "scissors")
game_running = True

while game_running:
  player = None
  computer = random.choice(options)

  while player not in options:
    player = input("Enter your choice: r(ock), p(aper), s(cissors) ")
    match player:
      case "r":
        player = "rock"
      case "p":
        player = "paper"
      case "s":
        player = "scissors"


  print(f"Player: {player}")
  print(f"Computer: {computer}")

  winning_result = "Winner"
  losing_result = "Maybe next time"

  if player == computer:
    print("It's a tie!")
  elif player == "rock" and computer == "scissors":
    print(winning_result)
  elif player == "paper" and computer == "rock":
    print(winning_result)
  elif player == "scissor" and computer == "paper":
    print(winning_result)
  else:
    print(losing_result)

  # play_again = input("Play again? (y/n): ").lower()
  # if not play_again == "y":
  if not input("Another game? (y/n): ").lower() == "y":
    game_running = False

print("Thanks for playing!")