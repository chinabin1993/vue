import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import foo from "@/components/foo"
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "HelloWorld",
			component: HelloWorld,
			meta: {
				keepAlive: true
			}
		},
		{
			path: "foo",
			name: "foo",
			component: foo
		}
	]
})
