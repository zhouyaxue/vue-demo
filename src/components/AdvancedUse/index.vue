<template>
    <div>
        <p>vue 高级特性</p>
        <hr>
        <!-- 自定义 v-model -->
        <!-- <p>{{name}}</p>
        <CustomVModel v-model="name"/> -->
        <NextTick/>
    </div>
</template>
<script>
// import CustomVModel from './CustomVModel'
import NextTick from './NextTick'
export default {
    components:{
        // CustomVModel,
        NextTick
    },
    data(){
        return {
            name:'yx'
        }
    }
}
</script>