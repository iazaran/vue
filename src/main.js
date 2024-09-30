import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import { englishToFrench } from "@/utils"

import Component27Home from './components/Component27/Component27Home.vue'
import Component27About from './components/Component27/Component27About.vue'
import Component27Contact from './components/Component27/Component27Contact.vue'

const routes = [
  { path: '/home', component: Component27Home },
  { path: '/about', component: Component27About },
  { path: '/contact', component: Component27Contact },
]

const router = VueRouter.createRouter({
  history: VueRouter.createMemoryHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

englishToFrench(app);

app.mount('#app')
