import {createApp} from 'vue'
import App from './App.vue'


// PrimeVue
import PrimeVue from 'primevue/config'
// 主题
import 'primevue/resources/themes/nova-accent/theme.css'
// core
import 'primevue/resources/primevue.min.css'
//Vant滚动条
import {NoticeBar} from "vant";


import element from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(element)
app.use(NoticeBar)
app.mount('#app')
