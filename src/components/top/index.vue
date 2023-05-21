<!--author:steam-404-->
<!--顶部导航栏-->
<script setup lang="ts">
</script>

<template>
  <div id="top">
    <div id="top1">steam-404</div>
    <div id="top2">
      <a href="https://github.com/steam-404">
        Go to my GitHub
      </a>
      👉
    </div>
  </div>
  <div>
    <!--    随便播放一些东西-->
    <van-notice-bar scrollable
                    text="只要坚持下去，总会有失败的一天"
    />
    <van-notice-bar scrollable
                    text="不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。"
    />
    <van-notice-bar scrollable
                    text="虽然你长得丑，不过，没关系，可是你想得美呀。"
    />
    <van-notice-bar scrollable
                    text="有时候你不努力一下，就不知道什么叫绝望。"
    />
    <van-notice-bar scrollable
                    text="不要看别人表面上一帆风顺，实际上他们背地里，也是一帆风顺。"
    />
    <van-notice-bar scrollable
                    text="假如生活欺骗了你，不要悲伤，不要心急，反正明天也一样。"
    />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#top {
  background-color: #409EFF;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#top2 > a {
  color: moccasin;
}
</style>