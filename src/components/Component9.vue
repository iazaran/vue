<script setup>
import ExternalLink from './ExternalLink.vue';

function alert(message) {
  window.alert(message)
}
</script>

<template>
  <h1 class="text-5xl mt-6">9</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/essentials/event-handling.html#key-modifiers" />
    <h2 class="text-2xl mb-5">Key Modifiers</h2>
    
    <p>Active the input and press <kbd>Esc</kbd> key</p>
    <input class="disabled:opacity-75" @keyup.esc="alert('So you know it is on top left!')" />
  </div>
</template>
