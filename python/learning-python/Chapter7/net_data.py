import urllib.request

# returns an http response object
web_url = urllib.request.urlopen("https://example.com/")
# eg, 200, 400
print("Result code: ", web_url.getcode())

data = web_url.read()
print(data)

