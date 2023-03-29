<template>
  <span class="userName">欢迎您,admin</span>
  &nbsp;&nbsp;
  <el-dropdown class="userInfo" trigger="click">
    <el-avatar :size="40" >
      <el-icon>
        <User />
      </el-icon>
    </el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import './index.less'
</script>