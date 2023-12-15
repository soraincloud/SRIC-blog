# VUE中的简单动画效果

------

## 1.组件绑定class与style

例如 这里是一个图片组件 我们给他绑定class与style 修改它关于底部的高度bottom

这里的冒号 : 是v-bind的简写 单向绑定

```vue
<el-image class="AppIndex-backTop-image-style" :style="bottomData"></el-image>
```

## 2.在js代码中绑定数据

```javascript
export default
{
    data()
    {
        return{
            bottomData: 'bottom: ' + (window.innerHeight + 100) + 'px',
        }
    },
```

这里是js中对数据的初始化

window.innerHeight 可以获取当前浏览器窗口的高度数据

将绑定的变量设置为 "bottom: xxx px" 并且绑定了style 就可以实现动态修改css

## 3.在需要的事件中修改数据

```javascript
handleScroll(e)
{
    this.data = e.scrollTop
    if(this.data > 300 && isMore == 0)
    {
        this.bottomData = 'bottom: 75px'
        isMore = 1
    }
    if(this.data < 300)
    {
        this.bottomData = 'bottom: ' + (window.innerHeight + 100) + 'px'
        isMore = 0;
    }
},
```

这里的代码或许有点让人看不懂 不过没关系 这只是一个例子

你只需要知道 直接修改绑定的变量中的值就可以了 这里会改变组件的位置

## 4.在css中设置动画

前面我们绑定了class 那么在对应的 css 中添加自定义的动画就行啦

```css
.AppIndex-backTop-image-style
{
    transition: 0.5s bottom;
}
```

transition 的用法很多 这里只介绍这一种

0.5s 表示了动画播放的过程所需的时间

bottom 表示这个动画改变的 style 数据是啥

------

# 没了，你居然看完了 Σ(っ °Д °;)っ

​	**copyright © 2023 06 22 soraincloud all rights reserved**