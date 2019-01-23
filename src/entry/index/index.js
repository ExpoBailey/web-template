import Vue from 'vue'
import IndexView from './index.vue'
import router from './router'
import VueResource from 'vue-resource'

import axios from '../../http/http'

Vue.use(VueResource);
Vue.prototype.axios = axios;

new Vue({
  el: '#app',
  router,
  render: h => h(IndexView)
});
