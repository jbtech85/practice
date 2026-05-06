import calendar

# cal = calendar.TextCalendar(calendar.SUNDAY)
# theMonth = cal.formatmonth(2026, 1, 5, 3)
# print(theMonth)

# cal2 = calendar.HTMLCalendar(calendar.SUNDAY)
# month2 = cal2.formatmonth(2026, 1)
# print(month2)

cal3 = calendar.TextCalendar(calendar.MONDAY)
for i in cal3.itermonthdays(2026, 4):
  print(i)

# for name in calendar.month_name:
#   print(name)

# for name in calendar.month_abbr:
#   print(name)


print("Team meetings for 2026: ")
for month in range(1,13):
  cal = calendar.monthcalendar(2026, month)
  weekOne = cal[0]
  weekTwo = cal[1]
  if weekOne[calendar.FRIDAY] != 0:
    meetup = weekOne[calendar.FRIDAY]
  else:
    meetup = weekTwo[calendar.FRIDAY]

  print(f"{calendar.month_name[month]} {meetup}")