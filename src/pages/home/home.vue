<template>
    <div class="homeWrap">
        home
        <el-button @click="logout" type="primary"> 注销</el-button>
    </div>
</template>
<script setup lang="ts">
    import './home.less'
    import { ref , reactive , toRaw } from 'vue'
    import { useRouter,Router} from 'vue-router'
    const router =useRouter()


    
    const logout=():void=>{
        router.replace('/login')
    }
</script>