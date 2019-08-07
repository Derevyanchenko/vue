import Vue from 'vue'
import App from './App.vue'
import Car from './Car'
import Vuelidate from 'vuelidate'
		
Vue.use(Vuelidate)

Vue.component('app-car', Car)

new Vue({
  el: '#app',
  render: h => h(App)
}) 
