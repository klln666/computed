import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [{
	path: '/',
	redirect: '/fangdai'
}];

import fangdai from '@/modules/fangdai/router.js';
routes.push(fangdai);

import shuifei from '@/modules/shuifei/router.js';
routes.push(shuifei);

import tqhd from '@/modules/tqhd/router.js';
routes.push(tqhd);


import gjj from '@/modules/gjj/router.js';
routes.push(gjj);


import gfnl from '@/modules/gfnl/router.js';
routes.push(gfnl);

import zhuangxiu from '@/modules/zhuangxiu/router.js';
routes.push(zhuangxiu);

export default new Router({
	scrollBehavior: function(to, from, savedPosition) {
		return savedPosition || {
			x: 0,
			y: 0
		}
	},
	// mode: 'history',
	routes
})
