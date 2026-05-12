import urllib.request
import json


# open the URL and read the data
web_url = urllib.request.urlopen("https://uselessfacts.jsph.pl/api/v2/facts/random")
# response code (200, 400, etc)
print("Results: ", web_url.getcode())

data = web_url.read()
# print(data)

# parse json code into native dictionary object
da_JSON = json.loads(data)
print(da_JSON["text"])