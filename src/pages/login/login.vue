<template>
  <div class="loginWrap">
    <div class="login">
      <div :class="['sign_in']">
        <div :class="['sign_in_move',signFlag?'':'sign_in_move_s']">
          <div class="sign_in_top">
            <LoginForm v-if="signFlag" :signFlag="signFlag" :form="formData" :changeUserFlag="changeUserFlag"
              :onSubmit="onSubmit" :isUserOrPhone="isUserOrPhone" />
          </div>
          <div class="sign_in_btom">
            <el-button v-if="!signFlag" type="primary" @click="changeModel" class="sign_btn" size="large">Sign
              In</el-button>
          </div>
        </div>
      </div>
      <div :class="['sign_up']">
        <div :class="['sign_up_move',signFlag?'':'sign_up_move_s']">
          <div class="sign_up_top">
            <LoginForm v-if="!signFlag" :signFlag="signFlag" :form="formData" :changeUserFlag="changeUserFlag"
              :onSubmit="onSubmit" :isUserOrPhone="isUserOrPhone" />
          </div>
          <div class="sign_up_btom">
            <el-button v-if="signFlag" type="primary" @click="changeModel" class="sign_btn" size="large">Sign Up</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useRouter, Router } from "vue-router";
import "./login.less";
import LoginForm from '@/components/loginForm/index.vue'
import {deepClone} from '@/utils/utils'
declare interface formParams {
  name: string,
  password: string,
  catch: string,
  phone: string,
  phoneMessage: string
}
const router: Router = useRouter();
const onSubmit = (e: Event): void => {
  //收集信息 发送后台 ，登录成功 form
  localStorage.setItem('online', '1')
  router.push("/home");
};

let formData = reactive<formParams>({
  name: "",
  password: "",
  catch: "",
  phone: '',
  phoneMessage: ''
});
const resetFormData = () => {
  formData = {
    name: "",
    password: "",
    catch: "",
    phone: '',
    phoneMessage: ''
  }
}
let signFlag = ref(true)
const changeModel = () => {
  resetFormData()
  isUserOrPhone.value = 'user'
  signFlag.value = !signFlag.value
}

let isUserOrPhone = ref('user')
const changeUserFlag = () => {
  resetFormData()
  if (isUserOrPhone.value == 'user') {
    isUserOrPhone.value = 'phone'
  } else {
    isUserOrPhone.value = 'user'
  }
}
// const arr1=[1,2,3,4,[6,7,8]];
// const arrr2=deepClone(arr1)
// console.log(arr1,arrr2,arrr2===arr1)
let obj1={a:1,b:[1,2,3],c:{d:1}}
let obj2=deepClone(obj1)
obj1.b[1]=6
console.log(obj2,obj1,obj2 === obj1)

console.log([1,6,5,4].sort((a,b)=>a-b))
</script>