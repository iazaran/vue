import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import i18nPlugin from './plugins/i18n'

import Component27Home from './components/Component27Home.vue'
import Component27About from './components/Component27About.vue'
import Component27Contact from './components/Component27Contact.vue'

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
app.use(i18nPlugin, {
    greetings: {
      hello: 'Bonjour!'
    }
})

app.mount('#app')
