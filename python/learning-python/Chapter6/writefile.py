# w+ means create file if it doesn't exist
sample_file = open("textfile.txt", "w+")
sample_file.write("Some sample text for the sample file.")
sample_file.close

# append file
sample_file = open("textfile.txt", "a+")
sample_file.write("  More text.")
sample_file.write("  Even more text.")
sample_file.close