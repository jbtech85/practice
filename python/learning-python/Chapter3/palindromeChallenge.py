

def is_palindrome(string):
  cleanedString = ''.join(char for char in string.lower() if char.isalnum())
  reversedString = cleanedString[::-1]

  if cleanedString == reversedString:
    return True
  else:
    return False
      
test_word = "Madam, I'm Adam."
is_palindrome(test_word)
