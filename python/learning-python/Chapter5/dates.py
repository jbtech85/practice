from datetime import date
from datetime import datetime

today = date.today()
# print(f"Today's date is {today}")
# print("Date Components:", today.day, today.month, today.year)

print("Today's Weekday #:", today.weekday())
days = ["mon","tue","wed","thu","fri"]
print(f"which is a {days[today.weekday()]}")

theDatetime = datetime.now()
print(f"The current datetime is {theDatetime}")

currentTime = datetime.time(datetime.now())
print(f"The current time is {currentTime}")