<!--
- v-for 中包装不同函数 包装时需要嵌套一个函数 否则会出现未定义或堆栈溢出的问题
- 事件后包装函数 例如 "over(item.mouse)"
- 最后需在 methods 中添加 over(mouse) { this[mouse]() }, 将函数的包装引入

- 父传子
先在子组件中通过 props：[参数] 设参，然后在父组件中通过 <组件标签 :参数名=“要赋予的值”></组件标签> 传参，最后在子组件中接参
- 子传父
在子组件中定义一个带有语句 this.$emit('键名', "值"); 方法
父组件通过 @键="要改变的参数值=$event" 接收参数
-->

<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="IndexAside-el-card-style" :style="active">
            <h2 class="common-text-style" style="margin-top:40px">目录</h2>
            <el-divider class="common-el-divider-style" />
            <el-card
            v-for="(item,i) in catalogs"
            :key="i"
            shadow="never"
            class="IndexAside-item-card-style"
            :style="item.borders"
            @mouseover="over(i)"
            @mouseleave="leave(i)"
            @click="jump(i)"
            >
            {{item.content}}
            </el-card>
        </el-card>
    </div>
</template>

<script>
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'IndexAside',
    data()
    {
        return{
            active: '',
            catalogs:
            [
                {
                    content: "SRIC 's BLOG",
                    borders: 'border-color: rgba(255,255,255,0);',
                },
                {
                    content: "技术采用",
                    borders: 'border-color: rgba(255,255,255,0);',

                },
                {
                    content: "关于",
                    borders: 'border-color: rgba(255,255,255,0);',

                },
                {
                    content: "近期活动",
                    borders: 'border-color: rgba(255,255,255,0);',

                },
            ]
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
                this.active = 'background: rgba(255,255,255,0.85);'
            }
        },
        mouseLeave()
        {
            this.active = ''
        },
        over(i)
        {
            if(isDark.value == true)
            {
                this.catalogs[i].borders = "border-color:white;"
            }
            else
            {
                this.catalogs[i].borders = "border-color:black;"
            }
        },
        leave(i)
        {
            console.log()
            this.catalogs[i].borders = 'border-color: rgba(255,255,255,0);'
        },
        jump(i)
        {
            window.location.href = "#appindex-card-" + i
        }
    }
}
</script>

<style>
.IndexAside-el-card-style
{
    height: 100%;
    margin-top: 10px;
    margin-right: 10px;
    background: rgba(255,255,255,0.64);
}

.IndexAside-el-card-style .el-card__body
{
    background: url("@/assets/images/background/muli-black.png"),rgba(255,255,255,0);
    background-size: 200px 120px;
    background-repeat: no-repeat;
    background-position: right top;
}

.IndexAside-item-card-style
{
    background: rgba(255,255,255,0);
    border: solid;
}

.IndexAside-item-card-style .el-card__body
{
    background: rgba(255,255,255,0);
    padding: 10px;
}

html.dark .IndexAside-el-card-style
{
    background: rgba(0,0,0,0.64);
}

html.dark .IndexAside-el-card-style .el-card__body
{
    background: url("@/assets/images/background/muli-white.png"),rgba(255,255,255,0);
    background-size: 200px 120px;
    background-repeat: no-repeat;
    background-position: right top;
}

html.dark .IndexAside-item-card-style
{
    border-color: white;
}

html.dark .IndexAside-item-card-style .el-card__body
{
    background: rgba(255,255,255,0);
    padding: 10px;
}
</style>