# **AXIOS的使用**

------

## 1.axios的下载

使用指令

```
npm install axios

npm install vue-axios
```

------

## 2.axios的引入

**main.js** 中的配置

```js
//app的import

import axios from 'axios'
import VueAxios from 'vue-axios'

//createapp

app.config.globalProperties.$axios = axios
app.use(VueAxios, axios)

//app.mount(#app)
```

即可全局引入 **axios**

**vue.config.js** 配置

```js
/* webpack-dev-server 相关配置 */
  devServer:
  {
    /* 使用代理 */
    proxy:
    {
      '/api':
      {
        target: 'http://localhost:8443',  // 目标代理服务器地址
        changeOrigin: true,                        // 允许跨域
        pathRewrite:{"^/api":''}
      },
    },
    port:8080
  },
```

配置需要置于 **defineConfig** 方法中进行配置

------

## 3.json数据的传输和使用

在组件中需要用到的 **js** 代码中 调用

```js
var _this = this
```

这是为了先保存数据传输前的对象，更改数据时需要使用 **_this** 进行修改

```js
this.$axios
.get('/url',{ params{ 参数名称: 参数 } }) //或者post
.then(resp =>
{
    if (resp && resp.status === 200)
    {
        更改_this中的数据
        //后端传来的数据可以使用 resp.data.数据名 访问
    }
})
```

------

# 没了，你居然看完了 Σ(っ °Д °;)っ

​	**copyright © 2023 06 22 soraincloud all rights reserved**