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
    @import '@/assets/css/common.css';
    @import '@/assets/css/Home/IndexHead.css';
</style>