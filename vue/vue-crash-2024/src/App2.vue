<script setup> /// no set up in options
import { ref, onMounted  } from 'vue';
// export default { /// options API
  // setup() { /// options API
    const name = ref('Jausche Yoe');
    const status = ref('active');
    const tasks = ref(['Task Uno', 'Task Dos', 'Task Tre']);
    const newTask = ref('default val');

    const toggleStatus = () => {
      if(status.value === 'active') {
        status.value = 'pending';
      } else if(status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
    };

    const addTask = () => {
      if(newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
      }
    };

    const deleteTask = (index) => {
      tasks.value.splice(index, 1);
    };

    onMounted(async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks.value = data.map((task) => task.title);
      } catch (error) {
        console.log('Error fetching tasks');
      }
    })

//     return { /// options API
//       name,
//       status,
//       tasks,
//       toggleStatus
//     }
//   },
// };
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask"> <!-- .prevent let's us not have to deal with preventDefault -->
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form> 


  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>


  <br /><br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
   <button @click="toggleStatus">Change Status</button> <!-- same thing -->
</template>

<style scoped></style>
