import Vue from 'vue'
import './css/style.css';
// import Vuex from 'vuex';
// import App from './App.vue'
import store from './components/store';
// import VuexComponent from './components/vuexcomponent.vue';
import ContainerComponent from './components/containercomponent.vue';
Vue.config.productionTip = false


new Vue({
    store, // $store object
    render: h => h(ContainerComponent),
}).$mount('#app')