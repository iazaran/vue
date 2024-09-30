<script setup>
import { ref } from 'vue'
import ExternalLink from './ExternalLink.vue';

const refCount = ref(0)

function incrementByRef() {
  refCount.value++
}
</script>

<template>
  <h1 class="text-5xl mt-6">3</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/essentials/reactivity-fundamentals.html#ref" />
    <h2 class="text-2xl mb-5">Reactive State by ref</h2>
    
    <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2" @click="incrementByRef">refCount: {{ refCount }}</button>
  </div>
</template>
