<template>
  <div>
    <h1>接收到的参数：{{id}}</h1>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        id: null
      }
    },
    mounted() {
      this.id = this.$route.params.id
    }
  }
</script>
