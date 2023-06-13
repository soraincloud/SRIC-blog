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
    active-text-color="#66ccff"
    :ellipsis="false"
    :default-active="'/index'"
    >
        <el-image :src="SRICNavLogo" class="NavMenu-SRIC-Navlogo-style"></el-image>
        <el-menu-item v-for="(item,i) in navList" :index="item.name" :key="i" class="NavMenu-menu-text-style" :default-active="this.$route.name">{{ item.navItem }}</el-menu-item>
        <div class="NavMenu-right-div-style" />
        <el-tooltip
        effect="light"
        content="切换模式"
        placement="bottom"
        >
            <el-button @click="switchThemes()" circle size="large" class="NavMenu-el-button-style">
                <el-icon class="NavMenu-el-icon-style" size="20px"><Sunny/></el-icon>
            </el-button>
        </el-tooltip>
    </el-menu>
    <div class="NavMenu-float-div-style" :style="place">
        <span>copyright © soraincloud all rights reserved</span>
    </div>
</template>

<script>
import { useDark, useToggle } from '@vueuse/core'
import { Sunny } from '@element-plus/icons-vue'

const isDark = useDark()
export default
{
    name: 'NavMenu',
    components: { Sunny },
    data ()
    {
        return {
            SRICNavLogo: require('@/assets/images/logo/SRIC-NavLogo.png'),
            navList:
            [
                {name: 'index', navItem: '首页'},
                {name: 'notes', navItem: '笔记'},
                {name: 'resources', navItem: '资源'},
                {name: 'forun', navItem: '论坛'},
                {name: 'document', navItem: '个人'},
            ],
            pageHeight: (window.innerHeight - 32),
            place: "top:" + (window.innerHeight - 32) + "px;left:" + (window.innerWidth/2 - 173) + "px;"
        }
    },
    methods:
    {
        switchThemes() 
        {
        const toggleDark = useToggle(isDark)
        toggleDark()
        },
    },
    mounted()
    {
        window.addEventListener('resize',() =>
            this.place = "top:" + (window.innerHeight - 32) + "px;left:" + (window.innerWidth/2 - 173) + "px"
        )
    },
}
</script>

<style scope>
    @import '@/assets/css/common/NavMenu.css';
</style>