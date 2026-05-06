import os
from os import path
import shutil
from zipfile import ZipFile

if path.exists("newfile.txt"):
  src = path.realpath("newfile.txt")

  # make a backup by appending "bak" to the name
  dst = src + ".bak"
  dst2 = src + ".bak2"

  # copy() - copies file contents
  # shutil.copy(src, dst)

  # copy2() - copies file metadata as well
  # shutil.copy2(src, dst2)

  # rename original file
  # os.rename("textfile.txt", "newfile.txt")

  #put things in a ZIP archive
  # root_dir, tail = path.split(src)
  # shutil.make_archive("archive", "zip", root_dir)

  # more granular control over ZIP files
  with ZipFile("testzip.zip", "w") as newzip:
    newzip.write("newfile.txt")
    newzip.write("textfile.txt.bak")