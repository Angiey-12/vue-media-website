import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import VueResource from 'vue-resource';


import Swimlane from 'vue-swimlane'


import AOS from 'aos'
import 'aos/dist/aos.css'



Vue.use(VueResource); 

Vue.http.options.root = 'https://vuejs-http-25586.firebaseio.com/data.json';

Vue.use(VueRouter);


const router = new VueRouter({
  mode:'history',
  routes,
})

new Vue({
  el: '#app',
  created () {
    AOS.init({
      easing: 'ease-out-back',
				duration: 1000
    })
  },
  router,
  render: h => h(App)
})
