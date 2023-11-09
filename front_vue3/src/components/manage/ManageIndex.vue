<template>
    <div class="ManageIndex-out-div">
        <el-card class="ManageIndex-el-card">
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
                                <el-card>
                                    <p class="ManageIndex-number-title">{{ $t('manageIndex.visit') }}</p>
                                    <p class="ManageIndex-number-text">
                                        {{ showNumber.toFixed(0) }}
                                    </p>
                                    <p class="ManageIndex-number-unit">{{ $t('manageIndex.times') }}</p>
                                </el-card>
                            </el-col>
                            <el-col :span="12">
                                <el-card>
                                    <p class="ManageIndex-number-title">{{ $t('manageIndex.user') }}</p>
                                    <p class="ManageIndex-number-text">
                                        {{ showNumber.toFixed(0) }}
                                    </p>
                                    <p class="ManageIndex-number-unit">{{ $t('manageIndex.users') }}</p>
                                </el-card>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-card>
                                    <p class="ManageIndex-number-title">{{ $t('manageIndex.time') }}</p>
                                    <p class="ManageIndex-number-text">
                                        {{ showNumber.toFixed(0) }}
                                    </p>
                                    <p class="ManageIndex-number-unit">{{ $t('manageIndex.days') }}</p>
                                </el-card>
                            </el-col>
                            <el-col :span="12">
                                <el-card>
                                    <p class="ManageIndex-number-title">{{ $t('manageIndex.page') }}</p>
                                    <p class="ManageIndex-number-text">
                                        {{ showNumber.toFixed(0) }}
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