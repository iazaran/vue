<script setup>
import { reactive } from 'vue'
import ExternalLink from './ExternalLink.vue';

const classObject = reactive({
  'bg-amber-600': true,
  'font-bold': false
})
</script>

<template>
  <h1 class="text-5xl mt-6">6</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/essentials/class-and-style.html#binding-html-classes" />
    <h2 class="text-2xl mb-5">Binding HTML Classes</h2>
    
    <div class="px-10 py-5" :class="classObject"></div>
  </div>
</template>
