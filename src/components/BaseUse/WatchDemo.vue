<template>
  <div class="watchDemo">
    <input v-model="name">
    <input v-model="info.city">
  </div>
</template>

<script>
export default {
  name: 'WatchDemo',
  data(){
    return {
      name:'yx',
      info:{
        city:'北京'
      }
    }
  },
  watch:{
    name(oldVal,newVal){
      console.info('watch name',oldVal,newVal)
    },
    info:{
      handler(oldVal,newVal){
        console.info('watch info',oldVal,newVal)
      },
      deep:true //深度监听
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
