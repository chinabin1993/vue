1、el的作用是进行某个DOM内容的接管，对于该DOM内容之外的内容，是无法用vue进行渲染的。
2、数据双向绑定原理
Vue数据双向绑定，底层使用的是Object.defineProperty()进行的双向绑定。