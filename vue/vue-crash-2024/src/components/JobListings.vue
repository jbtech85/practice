<script setup>
  import jobData from '@/jobs.json';

  import { ref } from 'vue';


  const jobs = ref(jobData);
  console.log(jobs.value);
</script>

<template>
  <div v-for="job in jobs" :key="job.id">
    {{  job.title  }}
  </div>
</template>