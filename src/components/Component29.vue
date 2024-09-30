<script setup>
import ExternalLink from './ExternalLink.vue';

defineProps({
  rawString: String,
  rawHtml: String,
})
</script>

<template>
  <h1 class="text-5xl mt-6">29</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/scaling-up/testing.html#unit-testing" />
    <h2 class="text-2xl mb-5">Vitest</h2>
    
    <p class="text-gray-600 mt-8 text-sm">The test is in the __tests__ folder. Vitest is installed and so using <code>npm run test</code> will run it.</p>
  </div>
</template>
