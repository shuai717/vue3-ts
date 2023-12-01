<template>
  <div class="layout">
    <el-container>
      <el-header class="headerWrap">
        <Header count="1" ref="myHeader" />
      </el-header>
      <el-main class="mainWrap">
        <router-view></router-view>
      </el-main>
      <el-footer class="footerWrap">&copy; 2022-2023 北京佳景科技有限公司</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import Header from '@/components/Header/index.vue'
import './index.less'
const myHeader = ref()
nextTick(()=>{
  console.log(myHeader.value.num,'myHeader.value')
})
</script>