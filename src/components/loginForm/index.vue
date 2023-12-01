<template>
  <el-form :model="form" class="sign_in_form" v-if="signFlag">
    <img src="../../assets/img/logo.svg" alt="logo" class="logo">
    <el-form-item v-show="isUserOrPhone == 'user'">
      <el-input v-model="form.name" prefix-icon="User" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item v-show="isUserOrPhone == 'user'">
      <el-input type="password" show-password v-model="form.password" prefix-icon="Lock" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item v-show="isUserOrPhone == 'user'">
      <el-input v-model="form.catch" prefix-icon="Message" placeholder="请输入验证码" />
    </el-form-item>
    <el-form-item v-show="isUserOrPhone == 'phone'">
      <el-input v-model="form.phone" prefix-icon="Iphone" placeholder="请输手机号" />
    </el-form-item>
    <el-form-item v-show="isUserOrPhone == 'phone'">
      <el-input v-model="form.phoneMessage" prefix-icon="Message" placeholder="请输入验证码" class="sign_in_catch" />
      <el-button type="primary" class="sign_in_get">获取</el-button>
    </el-form-item>
    <el-form-item class="sign_in_sub">
      <el-button type="primary" @click="onSubmit">{{ signFlag ? "Sign In" : 'Sign Up' }}</el-button>
    </el-form-item>
    <p class="sign_in_change" @click="changeUserFlag">切换到{{ isUserOrPhone == 'user' ? "手机号" : "账号密码" }}模式登陆</p>
  </el-form>
  <el-form  class="sign_in_form" v-if="!signFlag">
    注册
  </el-form>
</template>
<script setup lang="ts">
interface loginProps {
  form: {
    name: string,
    password: string,
    catch: string,
    phone: string,
    phoneMessage: string
  },
  changeUserFlag: (e: any) => any,
  onSubmit: (e: any) => any,
  isUserOrPhone: string,
  signFlag: boolean
}
const props = defineProps<loginProps>()


</script>