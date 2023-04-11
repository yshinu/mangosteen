import { createApp } from 'vue'
import { App } from './App'

import {createRouter} from 'vue-router'
import { routes } from './config/routes'
import { history } from './shared/history'
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。

const router = createRouter({
    history,
    routes:routes, 
  })
  
  const app = createApp(App)
  //确保 _use_ 路由实例使
  //整个应用支持路由。
  app.use(router)
  
  app.mount('#app')
