import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home-Page.vue'
import About from '../views/About-us.vue'
import Services from '../views/Our-Services.vue'
import Contact from '../views/Contact-us.vue'
import PricingPlan from '@/views/Pricing-Plan.vue'
import WebDevelopment from '@/views/services/Web-Development.vue'
import DigitalMarketing from '@/views/services/Digital-marketing.vue'
// import HomePage from '../views/Home-Page.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/Pricing', component: PricingPlan },
  { path: '/services/web', component: WebDevelopment },
  { path: '/services/Digital', component: DigitalMarketing },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // ensure the routes are correctly passed here
})

export default router
