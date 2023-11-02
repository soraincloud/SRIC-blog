<template>
    <div v-for="(item,i) in cards" :key="i" @mouseover="mouseOver(i)" @mouseleave="mouseLeave(i)" class="UsedCard-common-div">
        <el-card class="Used-common-el-card-style" :style="item.active">
            <el-image :src="item.logo"></el-image>
        </el-card>
    </div>
</template>

<script>
    import usedcard from "@/assets/js/home/UsedCard.js"
    export default usedcard
</script>

<style>
    @import '@/assets/css/home/UsedCard.css';
</style>