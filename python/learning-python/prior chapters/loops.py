# lets loop through some loops

x = 0
while x < 5:
  # print(x)
  x = x + 1


programInputerMessage = "Stop the program?  "
# answer = input(programInputerMessage)
answer = "yes"
while answer != "yes":
  print(answer)
  answer = input(programInputerMessage)


days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
# for d in days:
#   print(d, end=" || ")


# for d in days:
#   if(d == "Tuesday"):
#     continue

#   print(d)

for i, d in enumerate(days):
  print(i, d)