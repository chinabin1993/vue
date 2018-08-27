<template>
  <div>
    <my-content-header></my-content-header>
    <my-table :ChildTableData="tableData"></my-table>
  </div>
</template>

<script>

  export default {
    name: "structured",
    data(){
      return {
        tableData:{
          title:[
            {
              prop:'spanName',
              label:'数据名称'
            },
            {
              prop:'type',
              label:'格式'
            },
            {
              prop:'updateTime',
              label:'更新时间'
            }
          ],
          content:[
            {
              spanName: '某某非结构化数据名称',
              type:'.jpg',
              updateTime:'2018-08-15 09:35:00'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>
