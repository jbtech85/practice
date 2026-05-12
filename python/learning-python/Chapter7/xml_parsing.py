import xml.dom.minidom

# load doc into memory
doc = xml.dom.minidom.parse("samplexml.xml")


print(doc.nodeName)
print(doc.firstChild.tagName)

# get list of XML tags from doc and print each one
skills = doc.getElementsByTagName("skill")
# length because length is an xml property.  not len, like we'd normally do in python
print("Skill count: ", skills.length)

for skill in skills:
  print(skill.getAttribute("name"))

# create new XML tag, add it to the doc
new_skill = doc.createElement("skill")
new_skill.setAttribute("name", "React")
doc.firstChild.appendChild(new_skill)

skills = doc.getElementsByTagName("skill")
print("Skill count: ", skills.length)
for skill in skills:
  print(skill.getAttribute("name"))