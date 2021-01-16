<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <ComputedDemo/> -->
    <!-- <WatchDemo/> -->
    <!-- <FormDemo/> -->
    <!-- <ComponentsDemo/> -->
    <AdvancedUse/>
    新增的代码
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TplDemo from './components/BaseUse/TplDemo'
// import WatchDemo from './components/BaseUse/WatchDemo'
// import ComputedDemo from './components/BaseUse/ComputedDemo'
// import ClassDemo from './components/BaseUse/ClassDemo'
// import ConditionDemo from './components/BaseUse/ConditionDemo'
// import ListDemo from './components/BaseUse/ListDemo'
// import EventDemo from './components/BaseUse/EventDemo'
// import FormDemo from './components/BaseUse/FormDemo'
// import ComponentsDemo from './components/ComponentsDemo/index'
import AdvancedUse from './components/AdvancedUse/index'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // TplDemo,
    // WatchDemo,
    // ComputedDemo,
    // ClassDemo,
    // ConditionDemo,
    // ListDemo,
    // EventDemo,
    // FormDemo,
    // ComponentsDemo
    AdvancedUse
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
