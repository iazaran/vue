<script setup>
defineProps({
  rawString: String,
  rawHtml: String,
})
</script>

<template>
  <h1 class="text-5xl mt-6">1</h1>
  <div class="max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <h2 class="text-2xl mb-5">Comparing Text Interpolation and Raw HTML</h2>
    
    <p>{{ rawString }}</p>
    <p><span v-html="rawHtml"></span></p>
    <p class="text-gray-600 mt-8 text-sm">Security Warning: Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use v-html on trusted content and never on user-provided content.</p>
  </div>
</template>
