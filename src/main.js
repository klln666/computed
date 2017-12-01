// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Login from './components/login';
import naviWeb from './components/navi-web';
Vue.config.productionTip = false;
var jk = 'http://ditu.fang.com/?c=tools';
Vue.prototype.G = {
	jk:jk,
	city:window.Fang.city,
    urlXFSF: jk+'&a=getXfsf',
    urlESFSF: jk+'&a=getEsfSf'
};
import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.withCredentials = true;

import Toast from '@/components/common/toast';
Vue.use(Toast);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
new Vue({
    el: '#loginBarNew',
    router,
    template: '<Login/>',
    components: {Login}
});
// new Vue({
//     el: '#dsy_H01_01',
//     router,
//     template: '<naviWeb/>',
//     components: {naviWeb}
// });
