<template>
    <div>
        <p>vue 高级特性</p>
        <hr>
        <!-- 自定义 v-model -->
        <!-- <p>{{name}}</p>
        <CustomVModel v-model="name"/> -->
        <!-- <NextTick/> -->
        <!-- <SlotDemo :url="website.url">
            {{website.title}}
        </SlotDemo> -->
        <!-- 作用域插槽: 父组件如何获取子组件里的数据 -->
        <!-- <ScopedSlotDemo :url="website.url">
            <template v-slot="slotProps">
                {{slotProps.slotData.title}}
            </template>
        </ScopedSlotDemo> -->
        <!-- 动态组件 -->
        <!-- <component :is="NextTickName"></component> -->
        <!-- 按需加载组件 -->
        <!-- <FormDemo v-if="showFormDemo"/>
        <button @click="showFormDemo=true">按钮</button> -->
        <!-- keepalive -->
        <KeepAlive/>
    </div>
</template>
<script>
// import CustomVModel from './CustomVModel'
// import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from './ScopedSlotDemo'
import KeepAlive from './KeepAlive'
export default {
    components:{
        // CustomVModel,
        // NextTick,
        // SlotDemo,
        // ScopedSlotDemo,
        // FormDemo:()=>import('../BaseUse/FormDemo'),
        KeepAlive
    },
    data(){
        return {
            showFormDemo:false,
            website:{
                url:'https://qq.weatherol.com.cn',
                title:'yaxue',
                subTitle:'气象在线科技有限公司'
            },
            // NextTickName:'FormDemo',
        }
    }
}
</script>