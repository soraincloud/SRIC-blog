<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="Used-common-el-card-style" :style="active">
            <el-image :src="ElementLogo"></el-image>
        </el-card>
    </div>
</template>

<script>
    import usedcardelement from "@/assets/js/home/UsedCard/UsedCardElement.js"
    export default usedcardelement
</script>

<style>
    @import '@/assets/css/home/UsedCard.css';
</style>