<script setup>
import { shallowRef } from 'vue'
import Component25A from './Component25A.vue'
import Component25B from './Component25B.vue'
import ExternalLink from './ExternalLink.vue';

const current = shallowRef(Component25A)
</script>

<template>
  <h1 class="text-5xl mt-6">25</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/built-ins/keep-alive.html#keepalive" />
    <h2 class="text-2xl mb-5">KeepAlive</h2>
    
    <label class="mr-3"><input type="radio" v-model="current" :value="Component25A" /> A</label>
    <label><input type="radio" v-model="current" :value="Component25B" /> B</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>
