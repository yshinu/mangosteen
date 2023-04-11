import { createApp } from 'vue'
import { App } from './App'
import { Foo } from './views/Foo'
import { Bar } from './views/Bar'
import {createRouter,createWebHashHistory} from 'vue-router'
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Foo },
  { path: '/about', component: Bar },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })
  
  const app = createApp(App)
  //确保 _use_ 路由实例使
  //整个应用支持路由。
  app.use(router)
  
  app.mount('#app')
