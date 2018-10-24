import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * vuex 存在四种
 * state为存储变量
 * mutations 为 同步改变，里面为函数，在组件中用 $store.commit('')触发
 *
 */
const state = {
	count: 1,
	name: 'wbin',
	age: 25
}
// mutations 为固定用法，意味着改变
/**
 * mutations传值很简单，只需要在方法中放入参数即可
 * 这里我加入了一个参数n，默认值为1
 */
const mutations = {
	add(state, n = 1) {
		state.count += n
	},
	reduce(state, n = 1) {
		state.count -= n
	}
}
/**
 * getters可以当做是在获取数据之前进行的再次编译，相当于数据的一个过滤和加工
 * 相当于store.js的一个计算属性
 * 假设现在有个需求：
 * 每次state,count的值变化之前，给他加100
 *（每次state.count的值发生变化，在组件中触发getters里面的方法即可）
 */
const getters = {
	countAdd(state) {
		return (state.count += 100)
	}
}
/**
 * actions 和 mutations的功能基本是一致的，不同的是actions是异步改变状态，
 * mutations是同步改变state状态
 * 两个方法里面传递参数的差别
 * 一个是context是上下文对象，可以理解为store本身
 * 一个是{commit}直接把commit方法传递过来了
 */
const actions = {
	addAction(context) {
		console.log(context)
		context.commit('add', 10)
	},
	reduceAction({ commit }) {
		setTimeout(() => {
			commit('reduce')
		}, 1000)
		commit('reduce')
	}
}
/**
 * 随着项目越来越复杂，我们的共享的状态越来越多，
 * 这时候我们需要把我们状态的各个操作进行分组，分组后再进行编写
 * 当我们在组件中进行调用时，只需要前面加上a就可以了，其他是一样的
 */
const moduleA = {
	state,
	mutations,
	getters,
	actions
}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
	// modules: {
	// 	a: moduleA
	// }
})
