<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave" class="IndexAbout-outside-div-style">
        <el-card class="common-with-back-el-card-style" :style="active">
            <h1 class="common-text-style">关于</h1>
            <el-divider class="common-el-divider-style" />
            <div class="common-text-style">欢迎来到我的博客 ! ( ＾∀＾)/</div>
            <div class="common-text-style">它由 VUE3 与 springboot 实现</div>
            <div class="common-text-style">应该会写一些小文章在这里, 记录一下</div>
            <div class="common-text-style">不过或许我想多做一些东西在博客里面</div>
            <div class="common-text-style">所以关于文章的内容并不会出现在这个首页 ~</div>
            <div class="common-text-style">这里就是一些展示和很多奇奇怪怪的东西</div>
            <div class="common-text-style">新功能应该会不断出现在顶部的导航栏</div>
            <div class="common-text-style">快逛逛吧 ~ (>▽</div>
        </el-card>
    </div>
</template>

<script>
    import indexabout from "@/assets/js/home/IndexAbout.js"
    export default indexabout
</script>

<style>
    @import '@/assets/css/common.css';
    @import '@/assets/css/home/IndexAbout.css';
</style>