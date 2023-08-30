<script setup>
import { ref } from 'vue'

const msg = ref('')
</script>

<template>
  <p>Current component: B</p>
  <span class="mr-2">Message is: {{ msg }}</span>
  <input v-model="msg">
</template>
