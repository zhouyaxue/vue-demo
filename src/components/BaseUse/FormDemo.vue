<template>
  <div class="formDemo">
    <p>输入框：{{name}}</p>
    <input type="text" v-model.trim="name"> 
    <!-- v-model.trim自动过滤掉前后的空格，中间的会保留一个空格，多余的删掉 -->
    <input type="text" v-model.lazy="name">
    <!-- v-model.lazy 相当于防抖功能，输完之后才会变化 -->
    <input type="text" v-model.number="age">
    <!-- v-model.number 转换成数字 -->
    <p>多行文本：{{desc}}</p>
    <textarea v-model="desc"></textarea>
    <!-- 注意，<textarea>{{desc}}</textarea> 是不允许的-->

    <p>复选框 {{checked}}</p>
    <input type="checkbox" v-model="checked"/>

    <p>多个复选框 {{checkedNames}}</p>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>

    <p>单选 {{gender}}</p>
    <input type="radio" id="male" value="male" v-model="gender">
    <label for="male">男</label>
    <input type="radio" id="female" value="female" v-model="gender">
    <label for="female">女</label>

    <p>下拉列表选择 {{selected}}</p>
    <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>

    <p>下拉列表多选 {{selectedList}}</p>
    <select v-model="selectedList" multiple>
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'FormDemo',
  data(){
    return {
      name:'yx',
      age:18,
      desc:'自我介绍',

      checked:true,
      checkedNames:[],

      gender:'male',

      selected:'',
      selectedList:[]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
