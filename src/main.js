import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

import { routes } from './routes';

Vue.http.options.emulateJSON = true

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})
