<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave" class="IndexAbout-outside-div-style">
        <el-card class="common-with-back-el-card-style" :style="active">
            <h1 class="common-text-style">{{  $t('indexaside.about')  }}</h1>
            <el-divider class="common-el-divider-style" />
            <div class="common-text-style">{{  $t('indexabout.about0')  }}</div>
            <div class="common-text-style">{{  $t('indexabout.about1')  }}</div>
            <div class="common-text-style">{{  $t('indexabout.about2')  }}</div>
            <div class="common-text-style">{{  $t('indexabout.about3')  }}</div>
            <div class="common-text-style">{{  $t('indexabout.about4')  }}</div>
            <div class="common-text-style">{{  $t('indexabout.about5')  }}</div>
            <div class="common-text-style">{{  $t('indexabout.about6')  }}</div>
            <div class="common-text-style">{{  $t('indexabout.about7')  }}</div>
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