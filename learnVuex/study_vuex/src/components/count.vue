<template>
  <div>
    <h3>{{msg}}</h3>
    <p>{{count}}</p>
    <button @click="add(10)">+</button>
    <button @click="reduce(10)">-</button>
    <hr>
    <div>
      <button @click="addAction">action+</button>
      <button @click="reduceAction">action-</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
/** 
 * state 访问状态的方式
 * 1、使用计算属性
 * 2、使用mapState
*/
export default {
  data () {
    return {
      msg: 'learn vuex'
    };
  },
  // computed: {
  //   count(){
  //     return this.$store.state.count
  //   }
  // }
  computed: {
    ...mapState(['count']),
    ...mapGetters(['countAdd'])
  },
  /**
   * 操作mutations的两种方式
   * 1、直接在methods中，用commit来触发 vuex中的mutations事件
   * 2、使用mapMutations触发
   */
  // methods: {
  //   handleClickAdd(n){
  //     this.$store.commit('add',n);
  //   },
  //   handleClickReduce(n){
  //     this.$store.commit('reduce',n);
  //   }
  // }
  methods: {
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  }
}

</script>
<style scoped>
button{
  font-size: 20px;
  background-color: #4875F5;
  outline: none;
}
</style>