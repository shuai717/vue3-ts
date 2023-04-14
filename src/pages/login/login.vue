<template>
  <div class="loginWrap">
    <div class="login">
      <div class="loginLeft"></div>
      <div class="loginRight">
        <el-form
          :model="form"
          class="loginform"
          label-position="right"
          label-width="100px"
        >
          <el-form-item label="用户名">
            <el-input
              v-model="form.name"
            />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" /> </el-form-item
          >'
          <el-form-item label="验证码">
            <el-input v-model="form.catch" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useRouter, Router } from "vue-router";
import "./login.less";
const router: Router = useRouter();
const form = reactive({
  name: "",
  password: "",
  catch: "",
});
const onSubmit = (e: Event): void => {
  //收集信息 发送后台 ，登录成功 form
  localStorage.setItem('online','1')
  router.push("/home");
};
</script>