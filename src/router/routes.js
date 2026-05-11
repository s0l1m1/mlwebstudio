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
      {
        path: 'izrada-sajtova',
        component: () => import('pages/ServiceLandingPage.vue'),
        props: { pageKey: 'izrada-sajtova' },
      },
      {
        path: 'redizajn-sajta',
        component: () => import('pages/ServiceLandingPage.vue'),
        props: { pageKey: 'redizajn-sajta' },
      },
      {
        path: 'landing-stranice',
        component: () => import('pages/ServiceLandingPage.vue'),
        props: { pageKey: 'landing-stranice' },
      },
      {
        path: 'izrada-sajtova-za-majstore',
        component: () => import('pages/ServiceLandingPage.vue'),
        props: { pageKey: 'izrada-sajtova-za-majstore' },
      },
      {
        path: 'izrada-sajtova-za-klima-servise',
        component: () => import('pages/ServiceLandingPage.vue'),
        props: { pageKey: 'izrada-sajtova-za-klima-servise' },
      },
      {
        path: 'izrada-sajtova-za-ordinacije',
        component: () => import('pages/ServiceLandingPage.vue'),
        props: { pageKey: 'izrada-sajtova-za-ordinacije' },
      },
      {
        path: '/products/servicepro-landing-kit',
        component: () => import('pages/ServiceProProductPage.vue'),
      },
      {
        path: '/digitalni-proizvodi/servicepro-landing-kit',
        redirect: '/products/servicepro-landing-kit',
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    redirect: '/',
  },
]

export default routes
