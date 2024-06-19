import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
	  path: '/',
	  name: 'home',
	  component: () => import( '../components/home.vue')
	},
  {
    path: '/BaiMa',
    name: 'BaiMa',
    component: () => import( '../components/BaiMa.vue')
  },
  {
    path: '/LongMen',
    name: 'LongMen',
    component: () => import( '../components/LongMen.vue')
  },
  {
    path: '/LaoJun',
    name: 'LaoJun',
    component: () => import( '../components/LaoJun.vue')
  },
  {
  path: '/haust',
  name: 'haust',
  component: () => import( '../components/haust.vue')  
  },
	{
	path: '/food',
	name: 'food',
	component: () => import( '../components/food.vue')  
	},
  {
  	path: '/people',
  	name: 'people',
  	component: () => import( '../components/people.vue')  
  },
  {
  	path: '/tradition',
  	name: 'tradition',
  	component: () => import( '../components/tradition.vue')  
  },
  {
  	path: '/region',
  	name: 'region',
  	component: () => import( '../components/region.vue')  
  },
  {
  	path: '/river',
  	name: 'river',
  	component: () => import( '../components/river.vue')  
  },
  {    
	path: '/test',
	name: 'test',
	component: () => import( '../components/test.vue')  
  },
  {
  	path: '/celebrity',
  	name: 'celebrity',
  	component: () => import( '../components/Z-celebrity.vue')  
  },
  {
  path: '/test2',
  name: 'test2',
  component: () => import( '../components/test2.vue')  
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
