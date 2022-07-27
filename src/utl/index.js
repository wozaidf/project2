//基础数据类型用ref
//引用数据类型用reactive
import { ref ,reactive} from 'vue'
const count = ref(0)
const countreactive = reactive({count:10})
//用ref定义引用数据类型
const countobject = ref({count:20}) 
const countarray = ref([{count:30}])
setInterval(() => {
    console.log(count.value++);
    console.log(countreactive.count++);
    //用ref引用引用数据类型过于复杂
    // console.log('countobject:',countobject.value.count++)
    // console.log('countarray:',countarray.value[0].count++)
}, 3000);





export{count,countreactive,countobject,countarray}

