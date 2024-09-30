<script setup>
import ExternalLink from '../ExternalLink.vue';
</script>

<template>
  <h1 class="text-5xl mt-6">27</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://router.vuejs.org/guide/" />
    <h2 class="text-2xl mb-5">Router</h2>
    
    <router-link to="/home"><b>Go to Home</b></router-link><br>
    <router-link to="/about"><b>Go to About</b></router-link><br>
    <router-link to="/contact"><b>Go to Contact</b></router-link>
  </div>

  <div class="max-w-2xl lg:text-center border border-l-3 rounded border-green-300 p-5 mt-3">
    <h6 class="text-gray-600 mb-5">Component matched by the route will render here</h6>
    
    <router-view />
  </div>
</template>
