# **VUE组件间的传值和VUEX**

------

## 1.组件间的传值

**父传子**

先在子组件中通过

```
 props：[参数]
```

 设参，然后在父组件中通过

```html
<组件标签 :参数名=“要赋予的值”></组件标签>
```

传参，最后在子组件中接参

**或**

在父组件中通过

```html
<组件标签 ref=“键”></组件标签>
```

设置 后使用

```js
this.$refs.键.变量名 = 值
```

修改子组件数值

**子传父**

在子组件中定义一个带有语句

```js
this.$emit('键名', "值");
```

的方法

父组件通过

```html
@键="要改变的参数值=$event"
```

 接收参数

------

## 2.组件间调用方法

父组件中对子组件的描述 ref="键" 后 可使用 this.$refs.键.函数 调用子组件的函数

父组件中对子组件的描述 @键="函数" 子组件可通过 this.$emit('键') 来调用父组件方法

------

## 3.跨组件传值

使用 **vuex**

```
npm install vuex
```

在 **main.js** 中全局引入

```js
//app的import

import store from './store'

//createapp

app.use(store)

//app.mount(#app)
```

在src目录下的文件夹 **store** 中配置 **index.js**

```js
import { createStore } from 'vuex'

export default createStore({
  state: 
  {
      //变量
  },
  getters: 
  {
      //获取变量的getter方法
  },
  mutations: 
  {
      //修改变量的方法
  },
  actions: 
  {
      //组件中自定义的方法
  },
  modules: 
  {
      //打包其他vuex的js文件
  }
})

```

**<!> 使用modules包装vuex js文件**

store 的 main 文件

```js
import { createStore } from 'vuex'

import user from "@/store/modules/user"

export default createStore({
  state:{},
  getters:{},
  mutations:{},
  actions:{},
  modules: 
  {
    user,
  }
})
```

需要引入的 js 文件

```js
export default
{
    state:
    {
        username: '',
        //声明变量和初始化
    },
    getters:
    {
        getUsername(state)
        {
            return state.username;
        },
        //类似getter方法
    },
    mutations:
    {
        setUsername(state,username)
        {
            state.username = username;
        },
        //类似setter方法
    },
}
```

组件中的使用

```js
_this.$store.commit('setUsername',resp.data.username) //设值

this.$store.getters.getUsername //取值
```

------

# 没了，你居然看完了 Σ(っ °Д °;)っ

​	**copyright © 2023 06 22 soraincloud all rights reserved**