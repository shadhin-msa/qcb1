
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'p1', component: () => import('pages/Index.vue') },
      { path: 'p2', component: () => import('pages/Page2.vue') },
      { path: 'p3', component: () => import('pages/Page3.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
