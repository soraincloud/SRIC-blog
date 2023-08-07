<!--
- @mouseeenter 在进入组件时触发 但在进入组件的子组件时不会触发
-->

<template>
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <el-card class="common-with-back-el-card-style" :style="active">
            <h1 class="common-text-style">技术采用</h1>
            <el-divider class="common-el-divider-style" />
            <el-row>
                <el-col :span="6"><used-card-vue/></el-col>
                <el-col :span="6"><used-card-springboot/></el-col>
                <el-col :span="6"><used-card-mysql/></el-col>
                <el-col :span="6"><used-card-element/></el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    import indexused from "@/assets/js/home/IndexUsed.js"
    export default indexused
</script>

<style>
    @import '@/assets/css/common.css';
</style>