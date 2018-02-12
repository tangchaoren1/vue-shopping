import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';
import { resolve } from 'url';

Vue.use(VueRouter);
Vue.use(Vuex);
const routerConfig = {
    mode: 'history',
    routes: [
        { path: '/Slowdown', component: (resolve) => require(['./views/AnimateSlow.vue'], resolve) }
    ]
}
const router = new VueRouter(routerConfig);


new Vue({
    el: '#app',
    router,
    render: h => {
        return h(App);
    }
})