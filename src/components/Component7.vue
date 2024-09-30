<script setup>
import { ref } from 'vue'
import ExternalLink from './ExternalLink.vue';

const awesome = ref(true)
</script>

<template>
  <h1 class="text-5xl mt-6">7</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/essentials/conditional.html#conditional-rendering" />
    <h2 class="text-2xl mb-5">Conditional Rendering</h2>
    
    <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2 mb-2" @click="awesome = !awesome">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>
