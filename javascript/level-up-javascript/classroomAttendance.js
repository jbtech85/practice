// use array and object destructuring to get a list of students

const Class1A = {
  hasTeachingAssistant: true,
  roster: ["Aizawa", "Iida", "Deku", "Bakugou", "Tsu", "Ochako", "Todoroki"]
};

function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;

  if(hasTeachingAssistant){
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }

  return students;
}

console.log(getStudents({
  hasTeachingAssistant: false,
  classList: ["Aizawa", "Iida", "Deku", "Bakugou", "Tsu", "Ochako", "Todoroki"]
}))