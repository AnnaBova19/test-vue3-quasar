import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: { name: 'home' },
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: 'home' },
      { path: 'customers', component: () => import('pages/customers/CustomersPage.vue') },
      { path: 'customer/:id', component: () => import('pages/customers/CustomerPage.vue') },
      { path: 'orders', component: () => import('pages/orders/OrdersPage.vue'), name: 'orders' },
      { path: 'order/:id', component: () => import('pages/orders/OrderPage.vue') },
      { path: 'order/:id/edit', component: () => import('pages/orders/EditOrderPage.vue') },
      { path: 'new_order', component: () => import('pages/orders/NewOrderPage.vue') },
    ],
  },
  {
    path: '/access-denied',
    component: () => import('pages/errors/403Page.vue'),
    name: '403',
  },
  
  {
    path: '/page-not-found',
    component: () => import('pages/errors/404Page.vue'),
    name: '404',
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    redirect: { name: '404' },
  },
];

export default routes;
