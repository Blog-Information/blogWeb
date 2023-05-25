<!--author:steam-404-->
<!--博客介绍-->
<template>
  <div id="headImage">
    <!--    头像-->
    <img src="../../../public/ikun.png" alt="loading...">
    <h4>Hi there 👋,I'm jian</h4>
    <h3>I am from Shaanxi, China</h3>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      ip:'',
      // ip
      address:'',
      // 地区
      browser:'',
      // 浏览器
      system:'',
      // 系统
      lsp:'',
      // 运营商信息
      userIp: 'https://api.vvhan.com/api/getIpInfo',
      //   获取用户地址和ip
      visitorUrl:'http://localhost:8080/visitorMessage'
    }
  },
  methods: {
    getUserIp(){
      axios.get(this.userIp,{
      }).then(response=>{
        this.ip=response.data.ip
        this.address=response.data.info.country+
            response.data.info.prov+
            response.data.info.city
        this.lsp=response.data.info.lsp
        this.getUserBrowser()
      }).catch(error=>{
        console.log(error)
      })
    },
    getUserBrowser(){
      this.system=window.navigator.platform
      this.browser=window.navigator.userAgent
      this.visitorMessage()
    },
    visitorMessage(){
      this.visitorUrl+=
          '?ipAddress='+this.ip+
          '&address='+this.address+
          '&lsp='+this.lsp+
          '&browser='+this.browser+
          '&system='+this.system
      axios.get(this.visitorUrl,{
      }).then(response=>{
        console.log(response)
      }).catch(error=>{
        console.log(error)
        console.log(this.visitorUrl)
      })
    }
  },
  mounted() {
    this.getUserIp()
  }
}
</script>
<style>
#headImage {
  text-align: center;
}

#headImage img {
  border-radius: 50%;
  width: 30vh;
}
</style>
