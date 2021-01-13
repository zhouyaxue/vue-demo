<template>
    <div>
        <button @click="changeState('A')">A</button>
        <button @click="changeState('B')">B</button>
        <button @click="changeState('C')">C</button>
        <keep-alive>
            <KeepAliveStageA v-if="state === 'A'"/>
            <KeepAliveStageB v-if="state === 'B'"/>
            <KeepAliveStageC v-if="state === 'C'"/>
        </keep-alive>
    </div>
</template>
<script>
import KeepAliveStageA from './KeepAliveStageA'
import KeepAliveStageB from './KeepAliveStageB'
import KeepAliveStageC from './KeepAliveStageC'
export default {
  components: { 
      KeepAliveStageA,
      KeepAliveStageB,
      KeepAliveStageC
  },
  data(){
      return {
          state:'A'
      }
  },
  methods:{
      changeState(state){
          this.state = state
      }
  }
}
</script>