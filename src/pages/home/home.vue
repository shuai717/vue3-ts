<template>
    <div class="homeWrap">
        home
        <el-button @click="logout" type="primary"> 注销</el-button>
    </div>
</template>
<script setup lang="ts">
    import './home.less'
    import {ref , reactive , toRaw} from 'vue'
    import {useRouter ,Router} from 'vue-router'
    const num = ref(1)
    // const obj = ref({a:'1'})
    let obj = { name: "aa", age: 18 };
    let state = reactive(obj);
    let obj2 = toRaw(state)
    // console.log(num,num.value,obj,'ref')
    console.log(obj,state,obj2,obj===obj2,'obj,state')
    const router:Router=useRouter()
    const logout:Function=(e:Event):void=>{
        router.replace('/login')
    }
</script>