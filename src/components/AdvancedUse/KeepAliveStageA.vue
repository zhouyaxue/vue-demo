<template>
    <div>
        <p>state A</p>
    </div>
</template>
<script>
export default {
  mounted(){
      console.log('A mounted')
  },
  destroyed(){
      console.log('A destroyed')
  }
}
</script>