<template>
    <span class="LinkCardWeibo-span-text-style">Weibo</span>
    <el-divider class="LinkCardWeibo-el-divider-style"></el-divider>
    <el-avatar :src="MarkWeibo" class="LinkCard-el-avatar-style" fit="scale-down"></el-avatar>
    <div class="LinkCard-name-text-style">@so_ra_in_cloud</div>
    <el-divider class="LinkCardWeibo-el-divider-style"></el-divider>
    <div class="LinkCard-text-style">{{ $t('linkcard.weibo') }}</div>
    <el-divider class="LinkCardWeibo-el-divider-style"></el-divider>

    <div class="LinkCard-text-style">
        (ﾉ*･ω･)ﾉ
        <a href="https://weibo.com/u/7836024763" target="blank">
        <el-button color="#fdf66d" size="small" class="LinkCard-link-button-style">
            传送门
            <el-icon class="LinkCard-icon-style" size="18px"><Connection/></el-icon>
        </el-button>
        </a>
    </div>
</template>

<script>
    import linkcardweibo from "@/assets/js/common/LinkCards/LinkCardWeibo.js"
    export default linkcardweibo
</script>


<style>
    @import '@/assets/css/common/LinkCardItem.css';
</style>