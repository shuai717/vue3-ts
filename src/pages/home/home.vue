<template>
    <div class="homeWrap">
        home {{obj.a}}
    </div>
</template>
<script setup lang="ts">
    import './home.less'
    import {ref} from 'vue'
    let obj =ref({a:'1'})
    obj.value.a='2'
</script>