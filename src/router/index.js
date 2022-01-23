import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Conversation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Conversations.vue')
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreationCompte.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Connexion.vue')
  },
  {
    path: '/creationconv',
    name: 'CreationConv',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreationConv.vue')
  },
  {
    path: '/membres',
    name: 'Membres',
    component: () => import(/* webpackChunkName: "about" */ '../views/Membres.vue')
  },
  {
    path: '/profil/:id',
    name: 'MembreProfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/MembreProfil.vue')
  },
  {
    path: '/deconnexion',
    name: 'Deconnexion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Deconnexion.vue')
  },
  {
    path: '/conversation/:id',
    name: 'ConversationDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/Conversation.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
