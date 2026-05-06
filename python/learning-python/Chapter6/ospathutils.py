import os
from os import path
import time
from datetime import datetime

# print(os.name)

# print("Item exists: ", path.exists("textfile.txt"))
# print("Item is a file: ", path.isfile("textfile.txt"))
# print("item is a directory: ", path.isdir("textfile.txt"))


# print("Item's path: ", path.realpath("textfile.txt"))
# print("Item's path and name: ", path.split(path.realpath("textfile.txt")))

# modification time
u = path.getmtime("textfile.txt")
print(u)

t = time.ctime(u)
print(t)
print(datetime.fromtimestamp(u))

# how long ago the item was modified
td = datetime.now() - datetime.fromtimestamp(u)
print(f"It's been {td} since the file was modified")
print(f"In seconds: {td.total_seconds()}")
