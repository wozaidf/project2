<template>

  <div @click="display">
    <h1>{{ count }}</h1>
    <h1>{{ countreactive.count }}</h1>
    <!-- <h1>{{ countobject.count }}</h1> -->
    <!-- <h1>{{ countarray[0].count }}</h1> -->
  </div>

</template>

<script>
import { count, countreactive, countarray, countobject } from '@/utl/index.js'
import { onMounted, computed, onBeforMount, watch, ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String           //接收来自父组件的参数
  },
  setup(props, context) {
    function display() {
      console.log('这是方法的使用')
      //1.这是方法的实现
    }
    //2.声明周期，所有的v2生命周期前面加上on
    onMounted(() => {
      console.log('haha')
      //6.这是子向父组件传参，'vue3'是传的值
      context.emit('hello', 'vue3')
      // 代替这种写法this.$emit()        子向父传参
    });
    // onBeforMount(() => { });
    const test = ref('')
    //3.watch
    watch(test, (currentvalue, oldvalue) => {

    });
    //4.computed
    const textcalc = computed(() => { test.value + 'lk' })
    //5.props
    console.log(props.msg)//使用父组件传来的参数，用propos.
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
