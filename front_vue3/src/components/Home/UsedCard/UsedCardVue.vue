<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="Used-common-el-card-style" :style="active">
            <el-image :src="VueLogo"></el-image>
        </el-card>
    </div>
</template>

<script>
    import usedcardvue from "@/assets/js/home/UsedCard/UsedCardVue.js"
    export default usedcardvue
</script>

<style>
    @import '@/assets/css/home/UsedCard.css';
</style>