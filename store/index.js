import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
	wordpressAPI: 'http://visney.cn:81',
	wordpressAPIForJob: 'http://visney.cn:8082',
	headProdNav: {},
	headNewsNav: {},
	headJobNav: {},
	indexLinksData: null,
	// indexShowLinks: false
};

const mutations = {
	//头部导航产品与新闻信息
		setHeadProdNav(state,data){
			state.headProdNav = data
		},
		setHeadNewsNav(state,data){
			state.headNewsNav = data
		},
		setHeadJobNav(state,data){
			state.headJobNav = data
		},
		setIndexLinksData(state,data){
			state.indexLinksData = data
		},
		// setIndexShowLinks(state,bool){
		// 	state.indexShowLinks = bool
		// }	
};

const getters = {
};

const actions = {
	async nuxtServerInit({commit,state,req}) {
		
		//产品导航
			let headProdNav = await axios(`${state.wordpressAPI}/proCategory/showAll/main`);
			commit('setHeadProdNav',headProdNav.data);
		//新闻导航
			let headNewsNav = await axios(`${state.wordpressAPI}/articleCategory/getAll`);
			commit('setHeadNewsNav',headNewsNav.data);
		//招聘导航
			let headJobNav = await axios(`${state.wordpressAPIForJob}/jobClass/getAll`);
			commit('setHeadJobNav',headJobNav.data);
		//友情链接
			let indexLinksData = await axios(`${state.wordpressAPI}/link/selectAll`);
			commit('setIndexLinksData',indexLinksData.data);
	}
};

const store = () => new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store