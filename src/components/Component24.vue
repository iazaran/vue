<script setup>
import { ref } from 'vue'
import ExternalLink from './ExternalLink.vue';

const getInitialItems = () => [1, 2, 3, 4, 5]
const items = ref(getInitialItems())
let id = items.value.length + 1

function insert() {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, id++)
}

function reset() {
  items.value = getInitialItems()
}

function shuffle() {
  for (let i = items.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items.value[i], items.value[j]] = [items.value[j], items.value[i]];
  }
}

function remove(item) {
  const i = items.value.indexOf(item)
  if (i > -1) {
    items.value.splice(i, 1)
  }
}
</script>

<template>
  <h1 class="text-5xl mt-6">24</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/built-ins/transition-group.html#transitiongroup" />
    <h2 class="text-2xl mb-5">TransitionGroup</h2>
    
    <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2 mr-2" @click="insert">Random Insert</button>
    <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2 mr-2" @click="reset">Reset</button>
    <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2" @click="shuffle">Shuffle</button>

    <TransitionGroup tag="ul" name="fade" class="container">
      <div v-for="item in items" class="item my-2 pl-1 text-left" :key="item">
        {{ item }}
        <button class="text-red-600 px-2 float-right" @click="remove(item)">x</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style>
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleX(0.01) translate(-30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>