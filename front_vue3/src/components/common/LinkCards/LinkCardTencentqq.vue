<template>
    <span class="LinkCardTencentqq-span-text-style">Tencent-qq</span>
    <el-divider class="LinkCardTencentqq-el-divider-style"></el-divider>
    <el-avatar :src="MarkTencentqq" class="LinkCard-el-avatar-style" fit="scale-down"></el-avatar>
    <div class="LinkCard-name-text-style">@SRIC-offical</div>
    <el-divider class="LinkCardTencentqq-el-divider-style"></el-divider>
    <div class="LinkCard-text-style">{{ $t('linkcard.tencent') }}</div>
    <div class="LinkCard-text-style">ID : 3355905055</div>
    <el-divider class="LinkCardTencentqq-el-divider-style"></el-divider>

    <div class="LinkCard-text-style">
        (ﾉ*･ω･)ﾉ
        <el-button color="#d81e06" size="small" class="LinkCard-link-button-style" @click="copy">
            点我复制
            <el-icon class="LinkCard-icon-style" size="18px"><Edit/></el-icon>
        </el-button>
    </div>
</template>

<script>
    import linkcardtencentqq from "@/assets/js/common/LinkCards/LinkCardTencentqq.js"
    export default linkcardtencentqq
</script>


<style>
    @import '@/assets/css/common/LinkCardItem.css';
</style>