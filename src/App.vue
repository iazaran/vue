<script setup>
import { ref } from 'vue'

import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'
import Component3 from './components/Component3.vue'
import Component4 from './components/Component4.vue'
import Component5 from './components/Component5.vue'
import Component6 from './components/Component6.vue'
import Component7 from './components/Component7.vue'
import Component8 from './components/Component8.vue'
import Component9 from './components/Component9.vue'
import Component10 from './components/Component10.vue'
import Component11 from './components/Component11.vue'
import Component12 from './components/Component12.vue'
import Component13 from './components/Component13.vue'
import Component14 from './components/Component14.vue'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])
</script>

<template>
  <div class="bg-amber-50 flex flex-col items-center py-5">
    <Component1 rawString="<span style='color: red'>This should be red.</span>" rawHtml="<span style='color: red'>This should be red.</span>" />
    <Component2 />
    <Component3 />
    <Component4 />
    <Component5 />
    <Component6 />
    <Component7 />
    <Component8 />
    <Component9 />
    <Component10 />
    <Component11 />
    <Component12 />
    <Component13
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    />
    <Component14 propC="Check console for Vue warning!" propF="test" />
  </div>
</template>