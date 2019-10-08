import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';
import seller from '../components/seller/seller';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component:goods,
    },
    {
      path: '/goods',
      name: '',
      component:goods,
    },
    {
      path: '/ratings',
      name: '',
      component:ratings,
    },
    {
      path: '/seller',
      name: '',
      component:seller,
    },
  ],
  linkActiveClass: 'active',
});
