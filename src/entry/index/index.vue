<template>
  <div>
    <h2>{{msg}}</h2>
    <h2>{{desc}}</h2>
    <div>
      <span>公用组件：</span>
      <v-title :title="desc"></v-title>
    </div>
    <div>
      <button @click="open">加载其他页面</button>

    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import vTitle from '@/components/Title'

  export default {

    components: { // 组件
      vTitle
    },
    data() {
      return {
        msg: "Hello World"
      }
    },
    computed: {
      desc: function () {
        return this.msg.split('').reverse().join('')
      }
    },
    mounted() {
    },
    methods: {
      open() {
        let vm = this;
        vm.$router.push({name: "hello", params: { id: vm.msg}})
      }
    }
  }
</script>
<style scoped></style>
