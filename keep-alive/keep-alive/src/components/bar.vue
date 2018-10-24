<!-- helloworld页面进入到bar页面不需要缓存 -->
<template>
  <div>
    <h2>this is bar page;</h2>
    <button @click="$router.back()">返回</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

}

</script>
<style scoped>
</style>