<!--author:steam-404-->
<!--留言板-->
<template>
  <div id="content">
    <p id="contentP">留言板</p>
    <div v-for="value in MessageList">
      <p id="contentMessage" v-html="value"></p>
    </div>
  </div>
  <hr>
  <div id="markdown">
    <div id="markdownEffect">
      <p>预览效果</p>
      <div v-html="renderedMarkdown"></div>
    </div>
    <div id="markdownText">
      <p>内容</p>
      <el-input
          autosize
          v-model="markdown"
          placeholder="支持Markdown哟!"
          show-word-limit
          type="textarea"
          clearable="clearable"
      />
    </div>
  </div>
  <el-button
      type="primary"
      @click="sendUserMessage"
  >
    <span>发送</span>
  </el-button>
</template>
<script>
import MarkdownIt from 'markdown-it'
import MarkdownEmoji from 'markdown-it-emoji'
import axios from 'axios'
import {ElMessage} from "element-plus";

// 日期对象
const date = new Date();
// 时间戳
const timeStamp = date.getTime()
// 年份
const year = date.getFullYear()
// 月份
const month = date.getMonth() + 1
// 天数
const data = date.getDate()
// 小时
const hours = date.getHours()
// 分钟
const minutes = date.getMinutes()
// 秒
const seconds = date.getSeconds()

const sendSuccessful = () => {
  // 留言发送成功的提示
  ElMessage({
    message: '发送成功,厉害捏!',
    type: 'success',
  })
}
const sendFail = () => {
  /* 留言发送失败的提示 */
  ElMessage.error('发送失败')
}
export default {
  data() {
    return {
      markdown: ':)',
      mdParser: new MarkdownIt().use(MarkdownEmoji),
      // 留言列表
      MessageList: '',
      // 获取留言列表
      MessageUrl: 'http://localhost:8080/userMessageList',
      // 添加留言链接
      addUserMessage: 'http://localhost:8080/addUserMessage'
      //   折叠面板
    }
  },
  computed: {
    renderedMarkdown() {
      return this.mdParser.render(this.markdown);
    },
  },
  methods: {
    // 获取留言列表
    MessageBoardList() {
      axios.get(this.MessageUrl, {}).then(response => {
        this.MessageList = response.data
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 发送留言
    sendUserMessage() {
      console.log("发送")
      // 优雅,永不过时!!!
      this.addUserMessage += '' +
          '?timeStamp=' + timeStamp + '' +
          '&year=' + year + '' +
          '&month=' + month + '' +
          '&day=' + data + '' +
          '&hour=' + hours + '' +
          '&minute=' + minutes + '' +
          '&second=' + seconds + '' +
          '&content=' + this.renderedMarkdown;
      console.log(this.addUserMessage)
      axios.get(this.addUserMessage, {}).then(response => {
        console.log(response)
        // 添加后刷新网页
        sendSuccessful()
        const reload = setTimeout(() => {
          location.reload()
        }, 3000)
        clearTimeout(reload)
      }).catch(error => {
        sendFail()
        console.log(error)
      })
    },
  },
  mounted() {
    this.MessageBoardList();
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#markdown {

}

#markdownText {
  margin: 1vh;
}

#markdownEffect {
  width: 50vh;
  margin: 1vh;
}

#content {
  text-align: center;
}

p {
  color: #800080;
  font-weight: bold;
  font-family: "楷体", serif;
}

button {
  width: 100%;
}

#contentP {
  color: whitesmoke;
  line-height: 1.5; /* 行高 */
  padding: 0; /* 内边距 */
  text-align: center; /* 文字对齐方式 */
  font-weight: normal; /* 字体粗细：normal（正常），bold（加粗）等参数 */
  font-style: normal; /* 字体样式：normal（正常），italic（斜体）等参数 */
  text-decoration: none; /* 文字装饰：none（无），underline（下划线）等参数 */
  background-color: transparent; /* 背景色 */
}

#contentMessage {
  border: 0.3vh solid lightblue;;
  border-radius: 10vh;
}

span {
  color: #FFFFFF
}
</style>
