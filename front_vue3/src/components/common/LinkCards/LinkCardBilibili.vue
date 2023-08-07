<template>
    <span class="LinkCardBilibili-span-text-style">Bilibili</span>
    <el-divider class="LinkCardBilibili-el-divider-style"></el-divider>
    <el-avatar :src="MarkBilibili" class="LinkCard-el-avatar-style" fit="scale-down"></el-avatar>
    <div class="LinkCard-name-text-style">@SRIC-offical</div>
    <el-divider class="LinkCardBilibili-el-divider-style"></el-divider>
    <div class="LinkCard-text-style">这里是我的B站账号,或许你可以看到我在这里更新一些视频 ?</div>
    <el-divider class="LinkCardBilibili-el-divider-style"></el-divider>

    <div class="LinkCard-text-style">
        (ﾉ*･ω･)ﾉ
        <a href="https://space.bilibili.com/3493142858827848" target="blank">
        <el-button color="#fb7299" size="small" class="LinkCard-link-button-style">
            传送门
            <el-icon class="LinkCard-icon-style" size="18px"><Connection/></el-icon>
        </el-button>
        </a>
    </div>
</template>

<script>
    import linkcardbilibili from "@/assets/js/common/LinkCards/LinkCardBilibili.js"
    export default linkcardbilibili
</script>


<style>
    @import '@/assets/css/common/LinkCardItem.css';
</style>