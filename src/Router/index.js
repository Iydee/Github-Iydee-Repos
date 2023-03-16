import Vue from 'vue';
import VueRouter from 'vue-router';
import RepositoriesList from '../components/RepositoriesList.vue';
import RepositoryDetails from '../components/RepositoryDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'repositories-list',
    component: RepositoriesList,
  },
  {
    path: '/repo/:repoName',
    name: 'repo-details',
    component: RepositoryDetails,
  },
  
  {
    path: '*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
