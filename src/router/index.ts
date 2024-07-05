import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookingView from '@/views/BookingView.vue'
import LocationView from '@/views/LocationView.vue'
import AvailabilityView from '@/views/AvailabilityView.vue'
import ContactView from '@/views/ContactView.vue'
import LocalView from '@/views/LocalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/booking',
        name: 'booking',
        component: BookingView
    },
    {
        path: '/location',
        name: 'location',
        component: LocationView
    },
    {
        path: '/availability',
        name: 'availability',
        component: AvailabilityView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/local',
        name: 'local',
        component: LocalView    
    }
  ]
})

export default router
