<template>
    <div class="logo" @click="goHome">
    </div>
    <div class="menu">
        <Menu />
    </div>
    <div class="rightMenu">
        <RightMenu />
    </div>
</template>

<script lang="ts" setup>
import { useRouter, Router } from "vue-router";
import Menu from '@/components/Menu/index.vue'
import RightMenu from '@/components/RightMenu/index.vue'
import './index.less'
const router: Router = useRouter();
const goHome=()=>{
    router.push("/home");
}
</script>