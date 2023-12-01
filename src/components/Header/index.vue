<template>
    <div class="header_logo" @click="goHome">
    </div>
    <div class="header_menu">
        <Menu />
    </div>
    <div class="rightMenu">
        <RightMenu />
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { useRouter, Router } from "vue-router";
import Menu from '@/components/Menu/index.vue'
import RightMenu from '@/components/RightMenu/index.vue'
import './index.less'
const props=defineProps({
    count:String
})
console.log(props,props.count,'props')
const num =ref(1)
const router: Router = useRouter();
const goHome=()=>{
    router.push("/home");
}
defineExpose({
    goHome,
    num
})
</script>