<template>
    <div>
        <a :href="url">
            <slot>
                默认内容，即父组件没设置内容时，这里显示
            </slot>
        </a>
    </div>
</template>
<script>
export default {
    props:['url'],
    data(){
        return {

        }
    }
}
</script>