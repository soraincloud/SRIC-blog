<!--
- 使用 useDark() 可以获取当前是否为黑暗模式，useDark().value 为是否为黑暗模式的 boolean 变量
- 使用 @mouseove 监听鼠标进入组件 使用 @mouseleave 监听鼠标退出组件
- 使用 active 绑定 style 实现动态切换
-->

<template>
<div @mouseover="mouseOver" @mouseleave="mouseLeave">
    <el-card class="common-el-card-style" :style="active">
        <h1 class="IndexHead-text-style">SRIC 's BLOG</h1>
        <el-divider class="IndexHead-el-divider-style" />
        <span class="IndexHead-text-style">114514.1919810</span>
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
                this.active = 'background: rgba(0,0,0,0.8)'
            }
            else
            {
                this.active = 'background: rgba(255,255,255,0.8)'
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
.common-el-card-style
{
    width: 100%;
    margin-top: 10px;
    background: rgba(255,255,255,0.64);
}

.IndexHead-text-style
{
    color: #666666;
}

.IndexHead-el-divider-style
{
    background-color: #888888;
    padding-top: 1px;
}

html.dark .common-el-card-style
{
    background: rgba(0,0,0,0.64);
}

html.dark .IndexHead-text-style
{
    color: #ffffff;
}

html.dark .IndexHead-el-divider-style
{
    background-color: #ffffff;
}
</style>