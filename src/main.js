import Vue from 'vue';
import App from './App.vue';
import Paginate from 'vuejs-paginate';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './styles/main.scss'

Vue.config.productionTip = false
Vue.component('Paginate', Paginate)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
