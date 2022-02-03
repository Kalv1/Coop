import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Conversation',
    component: () => import('../views/Conversations.vue')
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: () => import('../views/CreationCompte.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import('../views/Connexion.vue')
  },
  {
    path: '/creationconv',
    name: 'CreationConv',
    component: () => import('../views/CreationConv.vue')
  },
  {
    path: '/membres',
    name: 'Membres',
    component: () => import('../views/Membres.vue')
  },
  {
    path: '/profil/:id',
    name: 'MembreProfil',
    component: () => import('../views/MembreProfil.vue')
  },
  {
    path: '/deconnexion',
    name: 'Deconnexion',
    component: () => import('../views/Deconnexion.vue')
  },
  {
    path: '/conversation/:id',
    name: 'ConversationDetails',
    component: () => import('../views/Conversation.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
