import Vue from 'vue'
import VueRouter from 'vue-router'
import Init from '../views/Init.vue'
import Introduction from '../views/Introduction.vue'
import Consent from '../views/Consent.vue'
import Instructions from '../views/Instructions.vue'
import Experiment from '../views/Experiment.vue'
import End from '../views/End.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Init',
    component: Init
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions
  },
  {
    path: '/consent',
    name: 'Consent',
    component: Consent
  },
  {
    path: '/experiment',
    name: 'Experiment',
    component: Experiment
  },
  {
    path: '/end',
    name: 'End',
    component: End
  }
]

const router = new VueRouter({
  routes
})

export default router
