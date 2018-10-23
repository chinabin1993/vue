<!-- foo页面 -->
<template>
  <div>
    <h3>this is foo page</h3>
    <input type="text"
           v-model="msg">
    <button @click="$router.back()">返回</button>
  </div>
</template>

<script>
export default {
  name: 'foo',
  data () {
    return {
      msg: ''
    };
  },

}

</script>
<style scoped>
</style>