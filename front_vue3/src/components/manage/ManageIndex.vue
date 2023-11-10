<template>
    <div class="ManageIndex-out-div">
        <el-card class="ManageIndex-el-card" @mouseover="mouseOver(0)" @mouseleave="mouseLeave(0)" :style="back0">
            <h1>{{ $t("manageIndex.textTitle") }}</h1>
            <p>{{ $t("manageIndex.text1") }}</p>
            <p>{{ $t("manageIndex.text2") }}</p>
            <p>{{ $t("manageIndex.text3") }}</p>
            <p>{{ $t("manageIndex.text4") }}</p>
        </el-card>
        <el-card class="ManageIndex-el-card">
            <el-row>
                <el-col :span="15">
                    <div class="ManageIndex-number-show-div">
                        <el-row>
                            <el-col :span="12">
                                <el-card @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)" :style="back1">
                                    <p class="ManageIndex-number-title">{{ $t('manageIndex.visit') }}</p>
                                    <p class="ManageIndex-number-text">
                                        {{ visitShowNumber.toFixed(0) }}
                                    </p>
                                    <p class="ManageIndex-number-unit">{{ $t('manageIndex.times') }}</p>
                                </el-card>
                            </el-col>
                            <el-col :span="12">
                                <el-card @mouseover="mouseOver(2)" @mouseleave="mouseLeave(2)" :style="back2">
                                    <p class="ManageIndex-number-title">{{ $t('manageIndex.user') }}</p>
                                    <p class="ManageIndex-number-text">
                                        {{ userShowNumber.toFixed(0) }}
                                    </p>
                                    <p class="ManageIndex-number-unit">{{ $t('manageIndex.users') }}</p>
                                </el-card>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-card @mouseover="mouseOver(3)" @mouseleave="mouseLeave(3)" :style="back3">
                                    <p class="ManageIndex-number-title">{{ $t('manageIndex.time') }}</p>
                                    <p class="ManageIndex-number-text">
                                        {{ timeShowNumber.toFixed(0) }}
                                    </p>
                                    <p class="ManageIndex-number-unit">{{ $t('manageIndex.days') }}</p>
                                </el-card>
                            </el-col>
                            <el-col :span="12">
                                <el-card @mouseover="mouseOver(4)" @mouseleave="mouseLeave(4)" :style="back4">
                                    <p class="ManageIndex-number-title">{{ $t('manageIndex.page') }}</p>
                                    <p class="ManageIndex-number-text">
                                        {{ pageShowNumber.toFixed(0) }}
                                    </p>
                                    <p class="ManageIndex-number-unit">{{ $t('manageIndex.times') }}</p>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="9">
                    <p class="ManageIndex-chart-show-text">{{ $t('manageIndex.pages') }}</p>
                    <div id="echarts-visit-chart" />
                    
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import manageindex from "@/assets/js/manage/ManageIndex.js";
export default manageindex;
</script>

<style scope>
@import "@/assets/css/manage/ManageIndex.css";
</style>