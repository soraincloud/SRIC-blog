# **关于vue-router**

------

## 1.vue-router的下载

使用指令

```
npm install vue-router
```

------

## 2.vue-router的引入

**main.js** 中的配置

```js
//app的import

import router from './router'

//createapp

app.use(router)

//app.mount(#app)
```

------

## 3.对router的配置

在src目录下的文件夹 **router** 中配置 **index.js**

```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = 
[
  {
      name: "路由名称",
      path: '/路由',
      component: () => import('路由对应的vue组件路径'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

```

------

## 4.路由跳转

在组件中跳转时

使用外部组件 进行路由跳转 直接跳转到对应的 **/名称** 路由

在函数中跳转时 可以使用

```js
this.$router.push('/路由名称')
```

进行跳转

------

# 没了，你居然看完了 Σ(っ °Д °;)っ

​	**copyright © 2023 06 22 soraincloud all rights reserved**