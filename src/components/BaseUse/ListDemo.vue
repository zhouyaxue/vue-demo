<template>
  <div class="listDemo">
    <p>遍历数组</p>
    <ul>
        <li v-for="(item,index) in listArr" :key="item.id">
            {{index}} - {{item.id}}
        </li>
    </ul>

    <p>遍历对象</p>
    <ul>
        <li v-for="(val,key,index) in listObj" :key="key">
            {{index}} - {{key}} - {{val.title}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListDemo',
  data(){
    return {
      flag:false,
      listArr:[
          {id:'a',title:'标题1'},
          {id:'b',title:'标题2'},
          {id:'c',title:'标题3'}
      ],
      listObj:{
          a:{title:'标题1'},
          b:{title:'标题2'},
          c:{title:'标题3'}
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
