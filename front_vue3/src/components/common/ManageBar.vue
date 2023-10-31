<template>
    <el-menu
    mode="horizontal"
    background-color="rgba(0,0,0,0.75)"
    active-text-color="#ff5f5f"
    >
        <el-image :src="SRICNavLogo" class="NavMenu-SRIC-Navlogo-style"></el-image>
        <div class="NavMenu-right-div-style" />
                <el-tooltip
        effect="light"
        placement="bottom"
        >
            <template #content>
                <p class="NavMenu-tooltip-p-style">{{  $t('menu.quit')  }}</p>
            </template>
            <el-button @click="switchSetting()" circle size="large" class="NavMenu-el-button-style">
                <el-icon class="NavMenu-el-icon-style" size="20px"><Setting/></el-icon>
            </el-button>
        </el-tooltip>
        <el-tooltip
        effect="light"
        placement="bottom"
        >
            <template #content>
                <el-radio-group v-model="language" @change="changeLanguage()">
                    <el-radio class="NavMenu-el-readio" label="0">简体中文</el-radio>
                    <el-radio class="NavMenu-el-readio" label="1">english</el-radio>
                    <el-radio class="NavMenu-el-readio" label="2">warma</el-radio>
                </el-radio-group>
            </template>
            <el-button circle size="large" class="NavMenu-el-button-style">
                <el-icon class="NavMenu-el-icon-style" size="20px"><Collection/></el-icon>
            </el-button>
        </el-tooltip>
        <el-tooltip
        effect="light"
        placement="bottom"
        >
            <template #content>
                <p class="NavMenu-tooltip-p-style">{{  $t('menu.mode')  }}</p>
            </template>
            <el-button @click="switchThemes()" circle size="large" class="NavMenu-el-button-style" style="margin-right: 30px">
                <el-icon class="NavMenu-el-icon-style" size="20px"><Sunny/></el-icon>
            </el-button>
        </el-tooltip>
    </el-menu>
    <div class="NavMenu-float-div-style" :style="place">
        <span>copyright © soraincloud all rights reserved</span>
    </div>
</template>

<script>
    import managebar from "@/assets/js/common/ManageBar.js"
    export default managebar
</script>

<style scope>
    @import '@/assets/css/common/NavMenu.css';
    @import '@/assets/css/common/ManageBar.css';
</style>