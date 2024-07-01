//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'

import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faPhone,
  faEnvelope,
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faBars,
  faWhatsapp
)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
