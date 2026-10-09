import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router';
import ScheduleView from '@/views/ScheduleView.vue';

/**
 * Hash-based URLs (`#/recepten/kip-rijst`) work on GitHub Pages without any
 * server configuration: the server only ever sees `index.html`.
 */
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: { name: 'schedule' } },
    { path: '/schema', name: 'schedule', component: ScheduleView },
    {
      path: '/schema/:slug',
      name: 'workout',
      component: () => import('@/views/WorkoutView.vue'),
      props: true,
    },
    {
      path: '/recepten',
      name: 'recipes',
      component: () => import('@/views/RecipesView.vue'),
    },
    {
      path: '/recepten/:slug',
      name: 'recipe',
      component: () => import('@/views/RecipeView.vue'),
      props: true,
    },
    {
      path: '/boodschappen',
      name: 'shopping',
      component: () => import('@/views/ShoppingView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],

  scrollBehavior(_to, from, savedPosition) {
    // Back/forward: return to where the user was.
    if (savedPosition) return savedPosition;

    // First page load: start at the top, with the header in view.
    if (from === START_LOCATION) return { top: 0 };

    // Navigating inside the app: skip the header and show the new content.
    return { el: '#main-nav', top: 10, behavior: 'smooth' };
  },
});
