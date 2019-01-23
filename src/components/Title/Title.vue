<template>
  <div>
    <h3>{{title}}</h3>
  </div>
</template>
<script>
  export default {
    name: "Title",
    props: {
      title: {
        type: String,
        default: ""
      }
    },
    data () {
      return {

      }
    },
    mounted() {
      console.log("Title组件：" + this.title)
    }
  }
</script>
<style scoped></style>
