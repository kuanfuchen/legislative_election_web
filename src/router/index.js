// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
    ],
  },{
    path:'/activity',
    component:()=>import('@/layouts/default/Activity.vue'),
    children:[
      {
        path:'',
        name:'Active',
        component: () => import('@/views/NewActivity.vue'),
      }
    ]
  },{
    path:'/policy',
    component:()=> import('@/layouts/default/Policy_issues.vue'),
    children:[{
      path:'',
      component:()=>import('@/views/Policity.vue')
    }]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
