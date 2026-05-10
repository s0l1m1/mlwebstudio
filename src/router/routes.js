const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: 'usluge',
        name: 'services',
        component: () => import('pages/ServicesPage.vue'),
      },
      {
        path: 'primeri',
        name: 'examples',
        component: () => import('pages/ExamplesPage.vue'),
      },
      {
        path: 'cene',
        name: 'pricing',
        component: () => import('pages/PricingPage.vue'),
      },
      {
        path: 'kontakt',
        name: 'contact',
        component: () => import('pages/ContactPage.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    redirect: '/',
  },
]

export default routes
