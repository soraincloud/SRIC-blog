<template>
    <el-image
        :src="require('@/assets/webp/head/' + head)"
        class="FunctionHead-head-image-style"
        :style="[imageTop, opacity]"
    ></el-image>
    <el-button
        @click="clickBack"
        color="#ff6666"
        class="SafetyPage-back-button-style"
        plain
    >
        <el-icon class="SafetyPage-back-icon-style"><ArrowLeftBold /></el-icon>
        {{ $t("setting.back") }}
    </el-button>
    <div
        class="FunctionHead-head-div1-style"
        :style="[divHeight, divTop1]"
    ></div>
    <div
        class="FunctionHead-head-div2-style"
        :style="[divHeight, divTop2]"
    ></div>
    <div
        class="FunctionHead-head-div3-style"
        :style="[divHeight, divTop3]"
    ></div>
    <div
        class="FunctionHead-head-div4-style"
        :style="[divHeight, divTop4]"
    ></div>
    <el-row>
        <el-col :span="12"></el-col>
        <el-col :span="9">
            <el-carousel
                trigger="click"
                height="100px"
                :autoplay="false"
                @change="carouselChange($event)"
                :style="carouselTop"
                class="FunctionHead-carousel-style"
            >
                <el-carousel-item v-for="(item, i) in carousel" :key="i">
                    <el-image
                        :src="require('@/assets/webp/head/' + item.webp)"
                        class="FunctionHead-carousel-image-style"
                    ></el-image>
                    <h3 class="FunctionHead-carousel-text-style">
                        {{ item.text }}
                    </h3>
                </el-carousel-item>
            </el-carousel>
        </el-col>
        <el-col :span="3"></el-col>
    </el-row>
</template>

<script>
import functionhead from "@/assets/js/function/FunctionHead.js";
export default functionhead;
</script>

<style>
@import "@/assets/css/common.css";
@import "@/assets/css/function/FunctionHead.css";
@import "@/assets/css/personal/SafetyPage.css";
</style>