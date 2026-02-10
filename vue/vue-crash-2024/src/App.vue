<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/HomeCards.vue';
  import JobListings from './components/JobListings.vue';
</script>

<template>
  <!-- <h1 class="text-2xl">Vue Jobs</h1> -->
  <Navbar />
  <Hero title="Test Title" subtitle="Test Subtitle" />
  <HomeCards />
  <JobListings />
</template>

<style