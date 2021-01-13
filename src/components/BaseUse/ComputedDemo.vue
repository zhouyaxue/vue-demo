<template>
  <div class="computedDemo">
    <p>num {{num}}</p>
    <p>double1 {{double1}}</p>
    <input v-model="double2">
  </div>
</template>

<script>
export default {
  name: 'ComputedDemo',
  data(){
    return {
      num:20
    }
  },
  computed:{
    double1(){
      return this.num * 2 
    },
    double2:{
      get(){
        return this.num * 2
      },
      set(val){
        this.num = val/2
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
