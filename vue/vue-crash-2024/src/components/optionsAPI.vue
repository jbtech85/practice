<script>
// learning the Vue 2 options API first
export default {
  data() {
    return {
      name: 'Jausche Yo',
      status: 'pending',
      tasks: ['Task Uno', 'Task Dos', 'Task Tres'],
      link: 'https://google.com'
    };
  },
  methods: {
    toggleStatus() {
      if(this.status === 'active') {
        this.status = 'pending';
      } else if(this.status === 'pending') {
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
    }
  }
};
</script>

<!-- this will be same for composition API -->
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- <a v-bind:href="link">Click for Google</a> -->
  <a :href="link">Click for Google</a> <!-- same thing -->

  <br /><br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
   <button @click="toggleStatus">Change Status</button> <!-- same thing -->
</template>

<style scoped></style>
