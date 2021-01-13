<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.title}}
                <button @click="deleteItem(item.id)">删除</button>
            </li>
        </ul>
    </div>
</template>
<script>
import event from './event'
export default {
    props:{
        // prop 类型和默认值
        list:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {

        }
    },
    methods:{
        deleteItem(id){
            this.$emit('delete',id)
        },
        addTitleHandler(title){
            console.log('on add title',title)
        }
    },
    created(){
        console.log('list created')
    },
    mounted(){
        console.log('list mounted')
        // 绑定自定义事件
        event.$on('onAddTitle',this.addTitleHandler)
    },
    beforeUpdate(){
        console.log('list before uopdate')
    },
    update(){
        console.log('list updated')
    },
    beforeDestroy(){
        // 及时销毁，否则可能造成内存泄漏
        event.$off('onAddTitle',this.addTitleHandler)
        console.info('list beforeDestroy')
    },
    destroy(){
        console.info('list destroy')
    }
}
</script>