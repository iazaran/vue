<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2"  @click="updateLocation">{{ location }}</button>
</template>
