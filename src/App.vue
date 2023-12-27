<template>
  <div id="app">
   <Navbar />
   <div class="container">
    <router-view />
   </div>
  </div>

  
</template>

<script setup>
import Navbar from './components/Navbar.vue'
window.location.reload(); 
</script>

