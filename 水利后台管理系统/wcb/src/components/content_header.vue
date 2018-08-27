/** 2018-08-27
*作者:wangbin
*功能: main主体部分的搜索、添加、删除公共组件
*/
<template>
  <div id="content_header">
    <el-input placeholder="请输入搜索的内容"
              suffix-icon="el-icon-search"
              v-model="searchContent"
              @keyup.enter.native="handleSearchContent">
    </el-input>
    <el-button type="primary"
               round>
      <i class="el-icon-plus"></i>
      添加数据
    </el-button>
    <el-button type="warning"
               round>
      <i class="el-icon-delete"></i>
      删除
    </el-button>
  </div>
</template>

<script>
  export default {
    name: "content_header",
    data() {
      return {
        searchContent: '',
      }
    },
    methods: {
      // 子组件往父组件传值，父组件监听searchValue方法
      handleSearchContent() {
        this.$emit('searchValue', this.searchContent);
      }
    }
  }
</script>

<style scoped lang="scss">
  $height: 64px;
  $background_color: #ffffff;
  $add_background_color: #4791fd;
  $btn_border_radius: 17px;
  $delete_background_color: #ff791a;
  $padding: 0 28px;
  #content_header {
    display: flex;
    align-items: center;
    background-color: $background_color;
    height: $height;
    padding: $padding;
  }
</style>
