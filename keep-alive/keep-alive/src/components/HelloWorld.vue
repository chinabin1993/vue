<template>
  <div class="hello">
    <h3>这是helloWorld页面</h3>
    <input type="text"
           v-model="msg">
    <button @click="handleClickGo('foo')">go to foo</button>
    <button @click="handleClickGo('bar')">go to bar</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  /** 
   * 进入到foo页面，helloWorld页面进行缓存
   * 否则不缓存
  */
  beforeRouteLeave (to, from, next) {
    if (to.name === 'foo') {
      from.meta.keepAlive = true;
    } else {
      from.meta.keepAlive = false;
    }
    next();
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleClickGo (type) {
      this.$router.push({ name: type });
    }
  }
}
</script>
