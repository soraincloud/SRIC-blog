<template>
    <div class="ManageIndex-out-div">
        <el-card class="ManageIndex-el-card">
            <div
                @mouseover="mouseOver(0)"
                @mouseleave="mouseLeave(0)"
                class="IndexHeadWarmaGood"
            >
                <el-card class="common-with-back-el-card-style" :style="card0">
                    <h1 class="common-text-style">{{ indexHeadTitle }}</h1>
                    <el-divider class="common-el-divider-style" />
                    <div class="common-text-style">{{ indexHead }}</div>
                </el-card>
            </div>
            <el-card class="manageHome-el-card">
                <el-tabs v-model="headActiveTabs" @tab-change="headTabChange">
                    <el-tab-pane label="简体中文" name="zh"> </el-tab-pane>
                    <el-tab-pane label="english" name="en"> </el-tab-pane>
                    <el-tab-pane label="warma" name="warma"> </el-tab-pane>
                </el-tabs>
                <el-input
                    v-model="indexHeadTitle"
                    maxlength="20"
                    show-word-limit
                    type="text"
                    style="margin-bottom: 10px"
                    @blur="headTitleBlur"
                />
                <el-input
                    v-model="indexHead"
                    maxlength="100"
                    show-word-limit
                    type="textarea"
                    @blur="headBlur"
                />
                <el-button
                    @click="clickHeadSubmit()"
                    type="danger"
                    class="manageHome-submit-button"
                    plain
                >{{ $t('common.submit') }}</el-button>
            </el-card>
        </el-card>
    </div>
</template>

<script>
import managehome from "@/assets/js/manage/ManageHome.js";
export default managehome;
</script>

<style scope>
@import "@/assets/css/manage/ManageHome.css";
@import "@/assets/css/manage/ManageIndex.css";
@import "@/assets/css/common.css";
@import "@/assets/css/home/IndexHead.css";
</style>