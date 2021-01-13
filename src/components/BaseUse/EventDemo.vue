<template>
  <div class="eventDemo">
    <p>{{num}}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
    <!-- 阻止单击事件继续传播 -->
    <a v-on:click.stop="doThis"></a>
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>
    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThat"></a>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis"></div>
    <!-- 只在当event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是从内部元素触发的 -->
    <div v-on:click.self="doThat"></div>
  </div>
</template>

<script>
export default {
  name: 'EventDemo',
  data(){
    return {
      num:0
    }
  },
  methods:{
      increment1(event){
          console.info('event',event,event.__proto__.constructor) //是原生的
          console.info(event.target)
          console.info(event.currentTarget)
          this.num++ 
      },
      increment2(val,event){
          console.info(event.target)
          this.num = this.num + val
      },
      loadHandler(){
          console.log('do some thing')
      }
  },
  mounted(){
      window.addEventListener('load',this.loadHandler)
  },
  beforeDestory(){
    //   [注意]用vue 绑定的事件，组件销毁时会自动被解绑
    // 自己绑定的事件，需要自己销毁
    window.removeEventListener('load',this.loadHandler)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
