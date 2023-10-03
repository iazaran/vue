<script setup>
import { ref, defineAsyncComponent } from 'vue'

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
import Component15 from './components/Component15.vue'
import Component16 from './components/Component16.vue'
import Component17 from './components/Component17.vue'
import Component18Provider from './components/Component18/Component18Provider.vue'
const Component19 = defineAsyncComponent(() =>
  import('./components/Component19.vue')
)
import Component20 from './components/Component20.vue'
import Component21 from './components/Component21.vue'
import Component22 from './components/Component22.vue'
import Component23 from './components/Component23.vue'
import Component24 from './components/Component24.vue'
import Component25 from './components/Component25/Component25.vue'
import Component26 from './components/Component26/Component26.vue'
import Component27 from './components/Component27/Component27.vue'
import Component28 from './components/Component28/Component28.vue'
import Component29 from './components/Component29.vue'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const firstName = ref('John')
const lastName = ref('Doe')
</script>

<template>
  <div class="bg-amber-50 flex flex-col items-center py-5">
    <h1 class="text-4xl font-semibold mt-3">Vue 3 + Vite</h1>
    
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
    <Component15 />
    <Component16
      v-model:first-name="firstName"
      v-model:last-name="lastName"
    />
    <Component17>
      <template #header>
        <h2>Here might be a page title</h2>
      </template>

      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </Component17>
    <Component18Provider />
    <Component19 />
    <Component20 />
    <Component21 />
    <Component22 />
    <Component23 />
    <Component24 />
    <Component25 />
    <Component26 />
    <Component27 />
    <Component28 />
    <Component29 />
  </div>
</template>