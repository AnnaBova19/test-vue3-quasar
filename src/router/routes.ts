import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), redirect: { name: 'posts' }, },
      { path: 'authors', component: () => import('pages/authors/AuthorsPage.vue') },
      { path: 'author/:id', component: () => import('pages/authors/AuthorPage.vue') },
      { path: 'posts', component: () => import('pages/posts/PostsPage.vue'), name: 'posts' },
      { path: 'post/:id', component: () => import('pages/posts/PostPage.vue') },
      { path: 'post/:id/edit', component: () => import('pages/posts/EditPostPage.vue') },
      { path: 'new_post', component: () => import('pages/posts/NewPostPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
