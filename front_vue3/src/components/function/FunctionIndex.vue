<template>
    <el-row>
        <el-col :span="2"></el-col>
        <el-col :span="9">
            <el-card class="common-with-back-el-card-style">
                <el-image
                    :src="headYuan"
                    class="FunctionIndex-yuanHead-image-style"
                ></el-image>
                <h3 class="FunctionIndex-h3-text-style">_(≧∇≦」∠)_</h3>
                <h1 class="FunctionIndex-h1-text-style">{{ $t('functions.head') }}</h1>
            </el-card>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="9"></el-col>
        <el-col :span="2"></el-col>
    </el-row>
</template>

<script>
import functionindex from "@/assets/js/function/FunctionIndex.js";
export default functionindex;
</script>

<style>
@import "@/assets/css/common.css";
@import "@/assets/css/function/FunctionIndex.css";
</style>