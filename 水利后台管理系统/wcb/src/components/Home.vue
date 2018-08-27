/** 2018-8-23
*作者:wangbin
*功能:该页面为跟页面
*/
<template>
  <div>
    <el-container>
      <!--头部公共部分-->
      <el-header style="height: 50px;">
        <my-head></my-head>
      </el-header>
      <el-container>
        <!--侧边栏导航部分-->
        <el-aside width="200px">
          <my-nav></my-nav>
        </el-aside>
        <!--主体部分，主要切换单页面是该部分的内容-->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  /**
   * 引入head、nav、mainContent组件
   * 其中mainContent组件内目前有两个组件
   */
  import head from './head';
  import nav from './nav';
  import myTable from './table';

  export default {
    name: "Home",
    components: {
      myHead: head,
      myNav: nav,
      myTable: myTable
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/element-variables";
</style>
