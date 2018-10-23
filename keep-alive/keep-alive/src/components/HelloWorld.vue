<template>
  <div class="hello">
    <h3>这是helloWorld页面</h3>
    <input type="text"
           v-model="msg">
    <button @click="handleClickGo">click me</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleClickGo () {
      this.$router.push({ name: 'foo' });
    }
  }
}
</script>
