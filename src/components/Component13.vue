<script setup>
import ExternalLink from './ExternalLink.vue';

defineProps(['title'])
</script>

<template>
  <h1 class="text-5xl mt-6">13</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/essentials/template-refs.html#refs-inside-v-for" />
    <h2 class="text-2xl mb-5">Component and v-for</h2>
    
    <h4>{{ title }}</h4>
  </div>
</template>
