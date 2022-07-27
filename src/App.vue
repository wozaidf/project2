<template>
  <div @click="display">
    <h1>{{ count }}</h1>
    <h1>{{ countreactive.count }}</h1>
    <!-- <h1>{{ countobject.count }}</h1> -->
    <!-- <h1>{{ countarray[0].count }}</h1> -->
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>

//创建一个响应式变量

import { count, countreactive, countarray, countobject } from '@/utl/index.js'
export default {

  name: 'App',
  components: {
    // HelloWorld
  },
  setup() {
    function display() {
      console.log('这是方法的使用')           //这是方法的实现
    }
    //如何创建响应式变量？
    //所有模板中想要绑定的方法和变量，都要在这setup函数中return
    return {
      count,
      countreactive,
      countarray,
      countobject,
      display
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
