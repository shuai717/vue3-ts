<template>
    <div class="logo">
    </div>
    <div class="menu">
        <Menu />
    </div>
    <div class="rightMenu">
        <RightMenu />
    </div>
</template>

<script lang="ts" setup>
import Menu from '@/components/Menu/index.vue'
import RightMenu from '@/components/RightMenu/index.vue'
import './index.less'
</script>