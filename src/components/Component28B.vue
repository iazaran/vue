<script setup>
import { store } from '../functions/store.js'
</script>

<template>
  <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2 mt-3" @click="store.increment()">
    From B: {{ store.count }}
  </button>
</template>
