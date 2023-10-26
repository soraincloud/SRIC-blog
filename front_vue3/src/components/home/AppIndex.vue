<!--
- 使用 window.onresize 检测页面发生变化
- 使用 window.innerHeight 获取当前页面高度
-->

<template>
    <el-image class="AppIndex-backTop-image-style" :src="backTop" @click="backToTop()" :style="bottomData"></el-image>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="5">
            <index-aside ref="aside" />
        </el-col>
        <el-col :span="12">
            <el-scrollbar @scroll="handleScroll($event)" ref="indexScroll" :height="indexHeight">
                <index-head id="appindex-card-0" @mouseover="over(0)" />
                <index-used id="appindex-card-1" @mouseover="over(1)" />
                <index-about id="appindex-card-2" @mouseover="over(2)" />
                <index-time id="appindex-card-3" @mouseover="over(3)" />
            </el-scrollbar>
        </el-col>
        <el-col :span="5">
            <el-scrollbar :height="asideHeight">
                <aside-message/>
            </el-scrollbar>
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>
</template>

<script>
    import appindex from "@/assets/js/home/AppIndex.js"
    export default appindex
</script>

<style>
    @import '@/assets/css/home/AppIndex.css';
</style>