<!--
- 使用 useDark() 可以获取当前是否为黑暗模式，useDark().value 为是否为黑暗模式的 boolean 变量
- 使用 @mouseove 监听鼠标进入组件 使用 @mouseleave 监听鼠标退出组件
- 使用 active 绑定 style 实现动态切换
-->

<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave" class="IndexHeadWarmaGood">
        <el-card class="common-with-back-el-card-style" :style="active">
            <h1 class="common-text-style">{{ indexHeadTitle }}</h1>
            <el-divider class="common-el-divider-style" />
            <div class="common-text-style">{{ indexHead }}</div>
        </el-card>
    </div>
</template>

<script>
    import indexhead from "@/assets/js/home/IndexHead.js"
    export default indexhead
</script>


<style>
    @import '@/assets/css/common.css';
    @import '@/assets/css/home/IndexHead.css';
</style>