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
      let ua=navigator.userAgent;
      let browserName;
      if (ua.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
      }
      // 检测Safari浏览器
      else if (ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") === -1) {
        browserName = "Safari";
      }
      // 检测Firefox浏览器
      else if (ua.indexOf("Firefox") > -1) {
        browserName = "Firefox";
      }
      // 检测IE浏览器
      else if (ua.indexOf("MSIE") > -1 || ua.indexOf("Trident/") > -1) {
        browserName = "Internet Explorer";
      }
      // 检测Edge浏览器
      else if (ua.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
      }
      else {
        browserName = "未知";
      }
      this.browser+=browserName+"-"
      // 获取浏览器版本
      let version;
      if (ua.indexOf("Chrome") > -1) {
        version = ua.match(/Chrome\/(\d+)/)[1];
      }
      // Firefox浏览器
      else if (ua.indexOf("Firefox") > -1) {
        version = ua.match(/Firefox\/(\d+)/)[1];
      }
      // Safari浏览器
      else if (ua.indexOf("Safari") > -1) {
        version = ua.match(/Version\/(\d+)/)[1];
      }
      // IE浏览器
      else if (ua.indexOf("MSIE") > -1 || ua.indexOf("Trident/") > -1) {
        version = ua.match(/(?:MSIE |rv:)(\d+)/)[1];
      }
      // Edge浏览器
      else if (ua.indexOf("Edge") > -1) {
        version = ua.match(/Edge\/(\d+)/)[1];
      }
      else {
        version = "";
      }
      this.browser+=version
      console.log(this.browser)
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
  width: 30%;
}
</style>
