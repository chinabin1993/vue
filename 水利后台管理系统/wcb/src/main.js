// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入axios
import axios from 'axios'

// 引入Elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 注册全局组件 table
import myTable from './components/table';
import myContentHead from  './components/content_header';
Vue.component('my-table',myTable);
Vue.component('my-content-header',myContentHead);

Vue.config.productionTip = false;
// 使用axios之前，需要修改其原型链
Vue.prototype.Axios = axios;
// 使用ElementUI，并且修改elementui组件默认尺寸为small，组件的z-index值为3000
Vue.use(ElementUI,{size:'small', zIndex:'3000'});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
