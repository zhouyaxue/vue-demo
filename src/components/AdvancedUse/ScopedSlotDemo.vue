<template>
    <div>
        <a :href="url">
            <slot :slotData="website">
                {{website.subTitle}}
            </slot>
        </a>
    </div>
</template>
<script>
export default {
    props:['url'],
    data(){
        return {
            website:{
                url:'https://test.weatherol.com.cn',
                title:'yx',
                subTitle:'轻量级富文本编辑器'
            }
        }
    }
}
</script>