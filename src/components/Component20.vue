<script setup>
import { useMouse } from '@/functions'
import ExternalLink from './ExternalLink.vue';

const { x, y } = useMouse()
</script>

<template>
  <h1 class="text-5xl mt-6">20</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/reusability/composables.html#composables" />
    <h2 class="text-2xl mb-5">Composition API functions</h2>
    
    <p>Mouse position is at: {{ x }}, {{ y }}</p>
  </div>
</template>
