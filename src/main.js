import Vue from 'vue';
import App from './App';
import router from './router';
import VueBus from 'vue-bus'
import './common/stylus/index.styl';
import VueResouce from 'vue-resource';
Vue.use(VueResouce);
Vue.use(VueBus);


Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
