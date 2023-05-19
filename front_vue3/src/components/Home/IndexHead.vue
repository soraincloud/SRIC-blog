<!--
- 使用 useDark() 可以获取当前是否为黑暗模式，useDark().value 为是否为黑暗模式的 boolean 变量
- 使用 @mouseove 监听鼠标进入组件 使用 @mouseleave 监听鼠标退出组件
- 使用 active 绑定 style 实现动态切换
-->

<template>
<div @mouseover="mouseOver" @mouseleave="mouseLeave" class="IndexHeadWarmaGood">
    <el-card class="common-with-back-el-card-style" :style="active">
        <h1 class="common-text-style">SRIC 's BLOG</h1>
        <el-divider class="common-el-divider-style" />
        <div class="common-text-style">欢迎来到我的博客 ! ( ＾∀＾)/</div>
        <div class="common-text-style">或许会有很多有意思的东西, 现在就开始吧 !</div>
    </el-card>
</div>
</template>

<script>
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'IndexHead',
    data()
    {
        return{
            active: ''
        }
    },
    methods:
    {
        mouseOver()
        {
            if(isDark.value == true)
            {
                this.active = 'background: rgba(0,0,0,0.85);'
            }
            else
            {
                this.active = 'background: rgba(255,255,255,0.85)'
            }
        },
        mouseLeave()
        {
            this.active = ''
        }
    }
}
</script>


<style>
.IndexHeadWarmaGood
{
    background: url("@/assets/images/background/warma-good.png"),rgba(255,255,255,0);
    background-size: 192px 108px;
    background-repeat: no-repeat;
    background-position: right 32px bottom;
}

.common-with-back-el-card-style .el-card__body
{
    background: url("@/assets/images/background/warma-lie.png"),rgba(255,255,255,0);
    background-size: 100px 100px;
    background-repeat: no-repeat;
    background-position: right top;
}

.common-with-back-el-card-style
{
    height: 100%;
    margin-top: 10px;
    background: rgba(255,255,255,0.64);
}

.common-text-style
{
    color: #666666;
    font-weight: bold;
}

.common-el-divider-style
{
    background-color: #888888;
    padding-top: 1px;
}

html.dark .common-with-back-el-card-style
{
    background: rgba(0,0,0,0.64);
}

html.dark .common-text-style
{
    color: #ffffff;
}

html.dark .IndexHead-el-divider-style
{
    background-color: #ffffff;
}
</style>