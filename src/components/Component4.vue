<script setup>
import { reactive } from 'vue'
import ExternalLink from './ExternalLink.vue';

const state = reactive({ reactiveCount: 0 })

function incrementByReactive() {
  state.reactiveCount++
}
</script>

<template>
  <h1 class="text-5xl mt-6">4</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive" />
    <h2 class="text-2xl mb-5">Reactive State by reactive</h2>
    
    <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2" @click="incrementByReactive">reactiveCount: {{ state.reactiveCount }}</button>
  </div>
</template>
