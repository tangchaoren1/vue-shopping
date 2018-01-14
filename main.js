import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';

const routerConfig = {
    mode: 'history'
}
const router = new VueRouter(routerConfig);

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
    el: '#app',
    render: h => {
        return h(App);
    }
})