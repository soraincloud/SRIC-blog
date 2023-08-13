<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="Used-common-el-card-style" :style="active">
            <el-image :src="MysqlLogo"></el-image>
        </el-card>
    </div>
</template>

<script>
    import usedcardmysql from "@/assets/js/home/UsedCard/UsedCardMysql.js"
    export default usedcardmysql
</script>

<style>
    @import '@/assets/css/home/UsedCard.css';
</style>