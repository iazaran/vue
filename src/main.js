import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18nPlugin from './plugins/i18n'

const app = createApp(App)

app.use(i18nPlugin, {
    greetings: {
      hello: 'Bonjour!'
    }
})

app.mount('#app')
