
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'p1', component: () => import('pages/Page1.vue') },
      { path: 'p2', component: () => import('pages/Page2.vue') },
      { path: 'p3', component: () => import('pages/Page3.vue') },
      { path: 'p4', component: () => import('pages/Page4.vue') },
      { path: 'p5', component: () => import('pages/Page5.vue') },
      { path: 'p6', component: () => import('pages/Page6.vue') },
      { path: 'p7', component: () => import('pages/Page7.vue') },
      { path: 'p8', component: () => import('pages/Page8.vue') },
      { path: 'p9', component: () => import('pages/Page9.vue') },
      { path: 'p10', component: () => import('pages/Page10.vue') },
      { path: 'p11', component: () => import('pages/Page11.vue') },
      { path: 'p12', component: () => import('pages/Page12.vue') },
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
