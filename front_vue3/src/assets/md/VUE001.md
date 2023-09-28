# VUE-CLI 创建 VUE3 项目

------

## 0.包管理器

需要下载 **nodejs** 

它会安装并全局配置 **npm** 包管理器

使用

```
npm -v
```

查看 **npm** 包管理器版本

------

## 1.全局安装VUE脚手架 VUE-CLI

终端指令

```
npm install -g @vue/cli
```

等待安装完成，卡住进程或报错网络问题，可以考虑更换下载源

使用指令

```
vue -V
```

查看版本

------

## 2.使用VUE-CLI创建项目

在目标文件夹打开终端

使用指令

```
vue create 项目名称
```

来创建项目

当然，也可以使用 **vue-ui** 创建项目

使用指令

```
vue ui
```

打开 **vue-ui** ，访问 **localhost:8080** 查看ui

------

## 3.vue的主要配置文件

### 3.1.main.js

**main.js** 是vue的主要配置 **js** 文件，所有js依赖都在 **main.js** 中全局引用

初始配置

```js
import { createApp } from 'vue'
import App from './App.vue'

//import内容
import 依赖名称 form '位置'

const app = createApp(App)

//依赖引入
app.use(依赖名称)

app.mount('#app')

```

### 3.2.vue.config.js

**vue.config.js** 集成了 **vue2** 中 **config** 文件夹中的所有配置文件

初始配置

```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    
  //配置内容
  
})
```

例子：

```js
transpileDependencies: true,
  lintOnSave:false,  //不使用驼峰命名检测
  publicPath: '/',
  outputDir: 'dist',
  assetsDir:"statics",
  productionSourceMap: process.env.NODE_ENV !== 'production'? false : true,
  /* webpack-dev-server 相关配置 */
  devServer:
  {
    /* 使用代理 */
    proxy:
    {
      '/api':
      {
        target: 'http://localhost:8443',  // 目标代理服务器地址
        changeOrigin: true,                          // 允许跨域
        pathRewrite:{"^/api":''}
      },
    },
    port:8080
  },
  //网页浏览器图标配置
  pwa: 
  {
    iconPaths: 
    {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
```

------

## 4.关于组件

所有组件都存放在组件 **App.vue** 中

它是所有组件的父组件

它们都会被渲染成 **html** 文件

需要改变 **header** 等属性时，可以到 **public** 文件夹中修改 **index.html**

------

# 没了，你居然看完了 Σ(っ °Д °;)っ

​	**copyright © 2023 06 22 soraincloud all rights reserved**