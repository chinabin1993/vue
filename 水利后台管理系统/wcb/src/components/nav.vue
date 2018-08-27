/** 2018-08-23
*作者:wangbin
*功能: 左边导航
*/
<template>
  <!--
      default-active:设置默认激活页面当前路由地址
      unique-opened：是否只打开一个子菜单
      router：是否以vue-router的形式实现跳转
    -->

      <el-menu
        :default-active="activedMenu($route.path)"
        unique-opened
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleNavChange">
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">结构化数据管理</span>
        </el-menu-item>
        <el-menu-item index="/notStructured">
          <i class="el-icon-setting"></i>
          <span slot="title">非结构化数据管理</span>
        </el-menu-item>
      </el-menu>
</template>

<script>
  export default {
    name: "my-nav",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleNavChange(index,indexPath){

      },
      activedMenu(val){
        return val;
      }
    }
  }
</script>

<style scoped>

</style>
