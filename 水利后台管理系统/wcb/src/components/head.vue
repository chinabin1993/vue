/** 2018-08-23
*作者:wangbin
*功能:水利局项目头部组件：为防止耦合度过高，尽可能的分开组件
*/
<template>
  <div id="header">
      <div class="h_left">
        <span class="logo">

        </span>
        <span class="name">某某节点管理平台</span>
      </div>
      <div class="weather">
        <span class="address">杭州</span>
        <span class="w_img">图片</span>
        <span class="temp">27℃~34℃</span>
      </div>
  </div>
</template>

<script>
    export default {
        name: "myHead"
    }
</script>

<style scoped lang="scss">
  #header{
    height: 50px;
    background-color: #1c5dcf;
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    .name{
      color: #fbfbf9;
      font-size: 20px;
      margin-left: 15px;
    }
    .weather{
      font-size: 16px;
      color: #ffffff;
    }
  }

</style>
