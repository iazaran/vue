<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <p>Current component: A</p>
  <span>count: {{ count }}</span>
  <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2 ml-2" @click="count++">+</button>
</template>
