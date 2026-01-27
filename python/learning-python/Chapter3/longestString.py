# find longest string in a list of strings

test_strings = [
  "Super Mario",
  "Sonic the Hedgehog",
  "Bubsy",
  "Vectorman",
  "Mega Man"
]

def find_largest(strings):
  longest = 0
  for s in strings:
    if len(s) > longest:
      longest = len(s)
  return longest

print(find_largest(test_strings))