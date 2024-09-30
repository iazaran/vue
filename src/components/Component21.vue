<script setup>
import ExternalLink from './ExternalLink.vue';

const vPlaceholder = {
  mounted: (el) => el.placeholder = 'Enter your name ...',
}
</script>

<template>
  <h1 class="text-5xl mt-6">21</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/reusability/custom-directives.html#custom-directives" />
    <h2 class="text-2xl mb-5">Custom Directives</h2>
    
    <input v-placeholder />
  </div>
</template>
