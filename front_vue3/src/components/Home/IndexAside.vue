<!--
- v-for 中包装不同函数 包装时需要嵌套一个函数 否则会出现未定义或堆栈溢出的问题
- 事件后包装函数 例如 "over(item.mouse)"
- 最后需在 methods 中添加 over(mouse) { this[mouse]() }, 将函数的包装引入

- 父传子
先在子组件中通过 props：[参数] 设参，然后在父组件中通过 <组件标签 :参数名=“要赋予的值”></组件标签> 传参，最后在子组件中接参
- 子传父
在子组件中定义一个带有语句 this.$emit('键名', "值"); 方法
父组件通过 @键="要改变的参数值=$event" 接收参数

- 使用 style[a,b] 可以绑定多个 style 值

- 父组件中对子组件的描述 ref="键" 后 可使用 this.$refs.键.函数 调用子组件的函数
- 父组件中对子组件的描述 @键="函数" 子组件可通过 this.$emit('键') 来调用父组件方法
-->

<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="IndexAside-el-card-style" :style="active">
            <h2 class="common-text-style" style="margin-top:40px">{{ $t('indexaside.menu') }}</h2>
            <el-divider class="common-el-divider-style" />
            <el-card
            v-for="(item,i) in catalogs"
            :key="i"
            shadow="never"
            class="IndexAside-item-card-style"
            :style="[item.borders,item.backgrounds]"
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
    import indexaside from "@/assets/js/home/IndexAside.js"
    export default indexaside
</script>

<style>
    @import '@/assets/css/common.css';
    @import '@/assets/css/home/IndexAside.css';
</style>