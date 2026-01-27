# create a function that takes a "type" and a "numbers" param
# "type" indicates "even" or "odd", for whether we want to count the number of even or odd numbers
# "numbers" is a list of integers

def count_numbers(type, numbers):
  if(len(numbers) < 1):
    return "Numbers was empty"
  
  oddCount = 0
  evenCount = 0

  for n in numbers:
    if(n % 2 == 0):
      evenCount += 1
    else:
      oddCount += 1
  
  if(type == "even"):
    return evenCount
  elif(type == "odd"):
    return oddCount
  else:
    return "Please enter 'even' or 'odd' for the type"
  
numbers = [7, 17, 2, 13, 19, 20, 0, 5, 11, 1280, 105]

result1 = count_numbers("even", numbers)
result2 = count_numbers("odd", numbers)
result3 = count_numbers("Blarg", numbers)

print(result1)
print(result2)
print(result3)