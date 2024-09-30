<script setup>
import { ref } from 'vue'
import ExternalLink from './ExternalLink.vue';

const show = ref(false)
</script>

<template>
  <h1 class="text-5xl mt-6">23</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/built-ins/transition.html#transition" />
    <h2 class="text-2xl mb-5">Transition</h2>
    
    <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2" @click="show = !show">Toggle</button>
    <Transition>
      <p class="mt-3" v-if="show">Hello ;-)</p>
    </Transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>