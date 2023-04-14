<template>
    <el-menu
    :default-active="activeIndex"
    :class="styles.menuUl"
    mode="horizontal"
    @select="handleSelect"
    active-text-color="#8cc63f"
    router
  >
    <el-menu-item v-for="(item, index) in menuData" :index="String(item.key)" :key="item.name">{{item.name}}</el-menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
  import styles from'./index.module.less'
  import routes from '@/router/routes';
  const menuData =routes[1]&&routes[1].children&&routes[1].children.filter((item)=>{
      if(item.path!='/')return item
  })
  let activeIndex =ref("0")

  const handleSelect=(index:string,indexPath:string[],item:any,routeResult:any)=>{
    console.log(index,indexPath,item,routeResult,"index,indexPath,item,routeResult")
  }
</script>