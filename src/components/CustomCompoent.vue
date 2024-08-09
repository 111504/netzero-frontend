<template>
  <span>{{ test2 }}</span> <!-- 不需要加 .value -->
</template>

<script setup>
import { ref } from 'vue'

const test = 123;
const test2 = ref(0); // 这里初始化为 0

test2.value = 11; // 在 setup 中修改值
</script>

<style scope>
/* 样式代码 */
  span {
   
    }
  
</style>
