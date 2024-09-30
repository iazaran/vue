<script setup>
import { ref } from 'vue'
import Component26Modal from './Component26Modal.vue'
import ExternalLink from '../ExternalLink.vue';

const showModal = ref(false)
</script>

<template>
  <h1 class="text-5xl mt-6">26</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/built-ins/teleport.html#teleport" />
    <h2 class="text-2xl mb-5">Teleport</h2>
    
    <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2" id="show-modal" @click="showModal = true">Show Modal</button>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <Component26Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </Component26Modal>
    </Teleport>
  </div>
</template>
