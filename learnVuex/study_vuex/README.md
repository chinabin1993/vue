# vuex

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
vuex使用步骤

首先安装vuex
npm install vuex --save

创建vuex文件夹（不是必要的），创建store.js
并在store.js中使用vuex

为了方便，我在全局组件app中使用了store.js中返回的store
这样子就不需要在每个组件中import 引入


vuex四种默认的值
state 存放值
mutations 同步操作值
actions 异步操作值
getters 相当于是一个计算属性，每次获取之前都会先计算一下，依赖项就是对应的state里面的值是否变化

除此之外，还有一个modules
随着我们项目越来越大，共享的数据越来越多，为了方便处理数据，我们可以把它放在不同的module中，方便使用






访问store值的方法有两种
一种是使用计算属性直接return
第二种是使用 mapState

而触发mutations的方式同样有两种
一种是methods里面 this.$store.commit('想要出发的mutations方法名','参数')
第二种是使用mapMutations



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
