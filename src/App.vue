<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App" @hello="confirm"/>
</template>

<script>

//创建一个响应式变量


import HelloWorld from './components/HelloWorld.vue'
export default {

  name: 'App',
  components: {
    HelloWorld
  },

  setup() {
    function confirm(childdate){                            
      console.log('这是app组件里接受子组件的传参',childdate)
    }
   
   return{
    confirm
   }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
