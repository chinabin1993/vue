<template>
  <div id="app">
    <!-- 两种方式缓存 一种使用 keep-alive include 直接包括组件名称即可 -->
    <!-- <keep-alive include="HelloWorld">
      <router-view></router-view>
    </keep-alive> -->
    <!-- 方式二： -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
