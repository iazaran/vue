<script setup>
import ExternalLink from './ExternalLink.vue';
</script>

<template>
  <h1 class="text-5xl mt-6">22</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/reusability/plugins.html#plugins" />
    <h2 class="text-2xl mb-5">Plugins</h2>
    
    <h4>{{ $translate('greetings.hello') }}</h4>
  </div>
</template>
