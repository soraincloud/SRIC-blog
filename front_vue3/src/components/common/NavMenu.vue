<!-- 
 - el-menu 使用了 router 模式，将 index 作为 path 进行路由跳转
 - 通过 v-for 指令，把 navList 数组渲染为一组 <el-menu-item> 元素
 - 使用 useDark, useToggle 实现黑暗模式切换，在html.dark 中自定义黑暗模式中组件样式
 - 使用 flex-grow: 1; 属性的 div 占位使得菜单栏中组件显示在右侧
 - 对于 vue 可以使用 window.addEventListener('resize',() => 来监听窗口变化
 -->

<template>
    <el-menu
    router
    mode="horizontal"
    background-color="rgba(255,255,255,0.64)"
    text-color="#222"
    active-text-color="#ff7f7f"
    :ellipsis="false"
    :default-active="defaultActive"
    >
        <el-image :src="SRICNavLogo" class="NavMenu-SRIC-Navlogo-style"></el-image>
        <el-menu-item v-for="(item,i) in navList" :index="item.name" :key="i" class="NavMenu-menu-text-style">{{ item.navItem }}</el-menu-item>
        <div class="NavMenu-right-div-style" />
        <el-tooltip
        effect="light"
        placement="bottom"
        >
            <template #content>
                <el-radio-group v-model="language" @change="changeLanguage()">
                    <el-radio label="0">简体中文</el-radio>
                    <el-radio label="1">english</el-radio>
                    <el-radio label="2">warma</el-radio>
                </el-radio-group>
            </template>
            <el-button circle size="large" class="NavMenu-el-button-style">
                <el-icon class="NavMenu-el-icon-style" size="20px"><Management/></el-icon>
            </el-button>
        </el-tooltip>
        <el-tooltip
        effect="light"
        content="背景模糊"
        placement="bottom"
        >
            <template #content>
                <el-progress type="circle" :percentage="progressData" status="success" :width="64" />
                <p class="NavMenu-progress-p-style">{{  $t('menu.back')  }}</p>
            </template>
            <el-button @click="switchFilter()" circle size="large" class="NavMenu-el-button-style">
                <el-icon class="is-loading NavMenu-el-icon-style" size="20px"><Open/></el-icon>
            </el-button>
        </el-tooltip>
        <el-tooltip
        effect="light"
        placement="bottom"
        >
            <template #content>
                <p class="NavMenu-tooltip-p-style">{{  $t('menu.fire')  }}</p>
            </template>
            <el-button @click="switchFire()" circle size="large" class="NavMenu-el-button-style">
                <el-icon class="is-loading NavMenu-el-icon-style" size="20px"><Star/></el-icon>
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
                <el-icon class="is-loading NavMenu-el-icon-style" size="20px"><Sunny/></el-icon>
            </el-button>
        </el-tooltip>
    </el-menu>
    <div class="NavMenu-float-div-style" :style="place">
        <span>copyright © soraincloud all rights reserved</span>
    </div>
</template>

<script>
    import navmenu from "@/assets/js/common/NavMenu.js"
    export default navmenu
</script>

<style scope>
    @import '@/assets/css/common/NavMenu.css';
</style>