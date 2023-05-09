<template>
    <el-menu
      :default-active="activeIndex"
      :class="styles.menuUl"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#8cc63f"
      router
    >
    <template v-for="(item, index) in menuData">
      <template v-if="item && item.children">
        <el-sub-menu :index="item.path">
          <template #title>{{item.name}}</template>
          <template v-for="itemChriden in item.children">
            <template v-if="itemChriden && itemChriden.hasOwnProperty('children')">
               
            </template>
            <template v-else>
              <el-menu-item  :index="itemChriden.path">{{itemChriden.name}}</el-menu-item>
            </template>
            
          </template> 
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item  :index="String(item.path)" :key="item.name">{{item.name}}</el-menu-item>
      </template>
    </template>
  </el-menu>
</template>
<script lang="ts" setup>
  import styles from'./index.module.less'
  import routes from '@/router/routes';
  const menuData =routes[1]&&routes[1].children&&routes[1].children.filter((item)=>{
      if(item.path!='/')return item
  })
  console.log(menuData,'menuData')
  let activeIndex =ref("0")
  const handleSelect=(index:string,indexPath:string[],item:any,routeResult:any)=>{
    console.log(index,indexPath,item,routeResult,"index,indexPath,item,routeResult")
  }
</script>