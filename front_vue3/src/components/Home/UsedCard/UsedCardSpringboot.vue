<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="Used-common-el-card-style" :style="active">
            <el-image :src="SpringbootLogo"></el-image>
        </el-card>
    </div>
</template>

<script>
    import usedcardspringboot from "@/assets/js/home/UsedCard/UsedCardSpringboot.js"
    export default usedcardspringboot
</script>

<style>
    @import '@/assets/css/home/UsedCard.css';
</style>