<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave" class="IndexAbout-outside-div-style">
        <el-card class="common-with-back-el-card-style" :style="active">
            <h1 class="common-text-style">{{  $t('indexaside.about')  }}</h1>
            <el-divider class="common-el-divider-style" />
            <div class="common-text-style">{{ indexAbout }}</div>
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