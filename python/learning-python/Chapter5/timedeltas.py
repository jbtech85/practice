from datetime import date
from datetime import datetime
from datetime import timedelta

# print(timedelta(days = 365, hours = 5, minutes = 1))

now = datetime.now()
# print(f"Today is {now}")

# print(f"In one year it'll be: {now + timedelta(days=365)}")

print(f"In 3 weeks and 4 days it will be: {now + timedelta(weeks=3,days=4)}")


t = datetime.now() - timedelta(weeks=5)
s = t.strftime("%A %B %d, %Y")
# print(f"5 weeks ago it was {s}")


# today = date.today()
# afd = date(today.year, 4, 1)
# if 