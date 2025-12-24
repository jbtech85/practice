
chaosList = [False, True, "Tree", 4.0, "Five", 6]
print(chaosList)
# print(len(chaosList))

# print(chaosList[1])
# print(chaosList[-2])

# chaosList[0] = 0

# print(chaosList)


# anotherList = [2,4,9]
# chaosList += anotherList
# print(chaosList)

# chaosString = "Once upon a time"
# print(chaosString[2])

# print(chaosList[1::2])

reverseList = chaosList[::-1]
print(reverseList)

oneTuple = (2,"Four",6)
print(oneTuple[1])


aSet = {1, 2, 3, 4, 3, 2, 1, "yo"}
print(aSet)

print(1 in chaosList) # it's counting True as "1"
print(1 in oneTuple)
print(1 in aSet)