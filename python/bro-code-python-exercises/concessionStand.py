# practice with dictionaries

# menu dictionary
menu = {"fish": 8.00,
       "chips": 2.00,
       "soda": 1.50,
       "beer": 2.50,
       "pizza": 10}

# empty list
cart = []

total = 0

print("-------- MENU --------")
for key, value in menu.items():
  print(f"{key:8}:{"":3} ${"":2}{value:.2f}")
print("----------------------")