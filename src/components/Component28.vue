<script setup>
import Component28A from './Component28A.vue'
import Component28B from './Component28B.vue'
import ExternalLink from './ExternalLink.vue';
</script>

<template>
  <h1 class="text-5xl mt-6">28</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api" />
    <h2 class="text-2xl mb-5">State Management with Reactivity</h2>
    
    <Component28A />
    <br />
    <Component28B />
  </div>
</template>
