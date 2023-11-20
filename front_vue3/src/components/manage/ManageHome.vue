<template>
    <el-scrollbar :height="bodyHeight">
        <div class="ManageIndex-out-div">
            <el-card class="ManageIndex-el-card">
                <h1 class="ManageHome-h1-text">{{ $t("manageHome.head") }}</h1>
                <div @mouseover="mouseOver(0)" @mouseleave="mouseLeave(0)" class="IndexHeadWarmaGood">
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
                    <el-input v-model="indexHeadTitle" maxlength="20" show-word-limit type="text"
                        style="margin-bottom: 10px" @blur="headTitleBlur" />
                    <el-input v-model="indexHead" maxlength="100" show-word-limit autosize type="textarea"
                        @blur="headBlur" />
                    <el-button v-if="headSubmit == false" @click="clickHeadSubmit()" type="danger"
                        class="manageHome-submit-button" plain>
                        {{ $t("common.submit") }}
                    </el-button>
                    <el-button v-if="headSubmit == true" @click="clickHeadApply()" type="danger"
                        class="manageHome-submit-button" plain>
                        {{ $t("common.apply") }}
                    </el-button>
                    <el-button v-if="headSubmit == true" @click="clickHeadCancel()" type="info"
                        class="manageHome-submit-button" plain>
                        {{ $t("common.cancel") }}
                    </el-button>
                    <span class="manageHome-submit-text">
                        {{ headSubmitText }}
                    </span>
                </el-card>
                <h1 class="ManageHome-h1-text">{{ $t("manageHome.about") }}</h1>
                <div @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)" class="IndexAbout-outside-div-style">
                    <el-card class="common-with-back-el-card-style" :style="card1">
                        <h1 class="common-text-style">
                            {{ indexAboutTitle }}
                        </h1>
                        <el-divider class="common-el-divider-style" />
                        <div class="common-text-style">{{ indexAbout }}</div>
                    </el-card>
                </div>
                <el-card class="manageHome-el-card">
                    <el-tabs v-model="aboutActiveTabs" @tab-change="aboutTabChange">
                        <el-tab-pane label="简体中文" name="zh"> </el-tab-pane>
                        <el-tab-pane label="english" name="en"> </el-tab-pane>
                        <el-tab-pane label="warma" name="warma"> </el-tab-pane>
                    </el-tabs>
                    <el-input v-model="indexAbout" maxlength="500" show-word-limit autosize type="textarea"
                        @blur="aboutBlur" />
                    <el-button v-if="aboutSubmit == false" @click="clickAboutSubmit()" type="danger"
                        class="manageHome-submit-button" plain>
                        {{ $t("common.submit") }}
                    </el-button>
                    <el-button v-if="aboutSubmit == true" @click="clickAboutApply()" type="danger"
                        class="manageHome-submit-button" plain>
                        {{ $t("common.apply") }}
                    </el-button>
                    <el-button v-if="aboutSubmit == true" @click="clickAboutCancel()" type="info"
                        class="manageHome-submit-button" plain>
                        {{ $t("common.cancel") }}
                    </el-button>
                    <span class="manageHome-submit-text">
                        {{ aboutSubmitText }}
                    </span>
                </el-card>
            </el-card>
        </div>
    </el-scrollbar>
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
@import '@/assets/css/home/IndexAbout.css';
</style>