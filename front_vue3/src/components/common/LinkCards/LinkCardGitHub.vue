<template>
    <span class="LinkCardGitHub-span-text-style">GitHub</span>
    <el-divider class="LinkCardGitHub-el-divider-style"></el-divider>
    <el-avatar :src="MarkGitHub" class="LinkCard-el-avatar-style" fit="scale-down"></el-avatar>
    <div class="LinkCard-name-text-style">@soraincloud</div>
    <el-divider class="LinkCardGitHub-el-divider-style"></el-divider>
    <div class="LinkCard-text-style">{{ $t('linkcard.github') }}</div>
    <el-divider class="LinkCardGitHub-el-divider-style"></el-divider>

    <div class="LinkCard-text-style">
        (ﾉ*･ω･)ﾉ
        <a href="https://github.com/soraincloud" target="blank">
        <el-button color="#32ea3e" size="small" class="LinkCard-link-button-style">
            传送门
            <el-icon class="LinkCard-icon-style" size="18px"><Connection/></el-icon>
        </el-button>
        </a>
    </div>
</template>

<script>
    import linkcardgithub from "@/assets/js/common/LinkCards/LinkCardGitHub.js"
    export default linkcardgithub
</script>


<style>
    @import '@/assets/css/common/LinkCardItem.css';
</style>