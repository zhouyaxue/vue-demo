<template>
    <div>
        <ul ref="ul1">
            <li v-for="(item,index) in list" :key="index">
                {{item}}
            </li>
        </ul>
        <button @click="addItem">添加一项</button>
    </div>
</template>
<script>
export default {
    components:{
        
    },
    data(){
        return {
            list:['a','b','c']
        }
    },
    methods:{
        addItem(){
            this.list.push(`${Date.now()}`)
            this.list.push(`${Date.now()}`)
            this.list.push(`${Date.now()}`)
            
            // 异步渲染，$nextTick 待 DOM渲染完再回调
            // 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次
            // 获取 DOM 元素
            this.$nextTick(()=>{
                // 获取 DOM 元素
                const ulElem = this.$refs.ul1
                // 获取 DOM 下子元素的数量
                console.log(ulElem.childNodes.length)

            })
            
        }
    }
}
</script>