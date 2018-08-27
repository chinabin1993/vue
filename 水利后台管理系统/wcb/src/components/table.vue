/** 2018-08-27
*作者:wangbin
*功能:公共组建--table页面
*/
<template>
  <div id="myTable">
    <el-table :data="ChildTableData.content"
              stripe
              ref="multipleTable"
              tooltip-effect="dark"
              style="width: 100%;"
              @select-change="handleSelectionChange">
      <el-table-column type="selection"
                       width="55">
      </el-table-column>
      <el-table-column v-for="(item, $index) in ChildTableData.title"
                        :prop="item.prop"
                        :label="item.label"
                        :key="$index">
      </el-table-column>
      <!--操作单独放置，以防止后续table没有操作这一列-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            plain
            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props:['ChildTableData'],
    name: "myTable",
    data() {
      return {
        multipleSelection: [],// 复选框情况下，选中的值
      }
    },
    mounted(){
      console.log(this.ChildTableData);
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped lang="scss">
  #myTable {
    margin-top: 20px;
  }
</style>
