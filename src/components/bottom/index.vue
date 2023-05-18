<!--author:steam-404-->
<!--底部信息-->
<script setup lang="ts">
import {ref} from 'vue'
// 版权
// 开始年份
const startYear=ref(2023)
// 当前年份
const data=new Date();
const nowYear=ref(data.getFullYear())
</script>

<template>
  <h5>
    © {{startYear}}-{{nowYear}}
    MIT License
    Designed and Developed with ❤️ by
    [<a href="https://github.com/Blog-Information">建建</a>]
  </h5>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
h5{
  background-color: #1F1E37;
  margin-top: 20vh;
  padding: 20vh;
  font-family: Helvetica,serif;
  text-align: center;
  font-size: 3vh;
}
a{
  color:  #409EFF;
}
</style>