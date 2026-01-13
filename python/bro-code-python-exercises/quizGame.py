# Final Fantasy quiz

questions = ("Which FF entry introduced Chocobos?",
             "Which FF entry introduced Triple Triad?",
             "How many main series games exist as of 1/12/2026?",
             "How many needles will a cactaur throw at you?",
             "Was Cloud Strife in Soldier?"
             )

options = ((("A. 1", "B. 2", "C. 4", "D. 7")),
           (("A. 14", "B. 6", "C. 8", "D. 3")),
           (("A. 15", "B. 18", "C. 20", "D. 16")),
           (("A. 1000", "B. 100", "C. 9999", "D. 50")),
           (("A. Yes", "B. No", "C. Uhh..", "D. I can't remember")))

#tuple of correct answers
answers = ("B", "C", "D", "A", "D")

#list of guesses, we will be appending guesses
guesses = []

score = 0
question_num = 0

for question in questions:
  print("---------------------")
  print(question)
  for option in options[question_num]:
    print(option)
  
  guess = input("Enter (A, B, C, D): ").upper()
  guesses.append(guess)
  if guess == answers[question_num]:
    score += 1
    print("CORRECT!")
  else:
    print("Incorrect")
    print(f"The correct answer was {answers[question_num]}")

  question_num += 1

print("------------------------------")
print("           RESULTS            ")
print("------------------------------")

print("answers: ", end="")
for answer in answers:
  print(answer, end=" ")
print()

print("guesses: ", end="")
for guess in guesses:
  print(guess, end=" ")
print()

score = int(score / len(questions) * 100)
print(f"Your score was: {score}%")