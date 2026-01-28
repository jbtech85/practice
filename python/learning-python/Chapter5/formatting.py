from datetime import datetime

now = datetime.now()

# print(now.strftime("The current year: %y"))
# print(now.strftime("%a, %d %B, %y"))

# print(now.strftime("Locale datetime %c"))
# print(now.strftime("Locale date: %x"))
# print(now.strftime("Locale time: %X"))


print(now.strftime("Current time: %I:%M:%S %p"))