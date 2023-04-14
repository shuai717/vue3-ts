<template>
  <span class="userName">欢迎您,admin</span>
  &nbsp;&nbsp;
  <!-- Menu 菜单项 -->
  <el-dropdown class="userInfo" @command="changeMenu">
    <el-avatar :size="40">
      <el-icon>
        <User />
      </el-icon>
    </el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="about">关于我们</el-dropdown-item>
        <el-dropdown-item command="logout">
          注销
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 注销确认框 -->
  <el-dialog v-model="dialogVisible" :show-close="false" width="500px">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">系统提示!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left">
            <CircleCloseFilled />
          </el-icon>
          Close
        </el-button>
      </div>
    </template>
    <span>确定要退出当前用户吗?</span>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="logout">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import './index.less'
import { useRouter, Router } from 'vue-router'
let dialogVisible = ref(false)//注销确定框
const router: Router = useRouter()

const changeMenu = (key: string): void => {
  if (key === 'about') {
  } else if (key === 'logout') {
    dialogVisible.value = true
  }
}
//确定退出
const logout = (): void => {
  router.replace('/login')
  localStorage.clear()
  handleClose()
}
const handleClose = (): void => {
  dialogVisible.value = false
}
</script>