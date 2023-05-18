<script lang="ts">
import {defineComponent} from "vue";
// 顶部
import top from './components/top/index.vue'
// 内容区
import blog from './components/blog/index.vue'
// 底部
import bottom from './components/bottom/index.vue'
// 留言板
import messageBoard from './components/messageBoard/index.vue'

export default defineComponent({
  components: {
    top,
    blog,
    bottom,
    messageBoard,
  },
})
</script>
<template>
  <!--    <top></top>-->
  <blog></blog>
  <message-board></message-board>
  <bottom></bottom>
</template>
<style>
</style>