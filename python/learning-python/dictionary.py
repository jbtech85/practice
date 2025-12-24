

myDictionary = {
  "one": 1,
  "zero": 0,
  3: "three",
  5.5: ["five", "dot", "five"]
}
print(myDictionary)

# access via keys
print(myDictionary["zero"])
print(myDictionary[5.5])

myDictionary[1234] = "OneTwoThre4"
print(myDictionary)

print(4 in myDictionary)
myDictionary[4] = "how about now?"
print(4 in myDictionary)

print(myDictionary.keys())
print(myDictionary.values())

for key, val in myDictionary.items():
  print(key, val)