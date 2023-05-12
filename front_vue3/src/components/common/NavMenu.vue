<!-- 
 - el-menu 使用了 router 模式，将 index 作为 path 进行路由跳转
 - 通过 v-for 指令，把 navList 数组渲染为一组 <el-menu-item> 元素
 - 使用 useDark, useToggle 实现黑暗模式切换，在html.dark 中自定义黑暗模式中组件样式
 - 使用 flex-grow: 1; 属性的 div 占位使得菜单栏中组件显示在右侧
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
        <el-menu-item v-for="(item,i) in navList" :index="item.name" :key="i" class="NavMenu-menu-text-style">{{ item.navItem }}</el-menu-item>
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
            {name: '/index', navItem: '首页'},
            {name: '/note', navItem: '笔记'},
            {name: '/resources', navItem: '资源'},
        ]
    }
  },
  methods:
  {
    switchThemes() 
    {
      const toggleDark = useToggle(isDark)
      toggleDark()
    }
  }
}
</script>

<style scoped>
.NavMenu-SRIC-Navlogo-style
{
    height: 50px;
    margin: 5px 10px 5px 10px;
}

.NavMenu-right-div-style
{
    flex-grow: 1;
}

.NavMenu-menu-text-style
{
    font-size: 16px;
    font-weight: bold;
}

.NavMenu-el-button-style
{
    margin-top: 10px;
    margin-right: 30px;
    margin-left: 10px;
}

.NavMenu-el-icon-style
{
    color: #000000;
}

html.dark .el-menu
{
    background-color: rgba(0,0,0,0.64);
}

html.dark .NavMenu-menu-text-style
{
    color: #ffffff;
}

html.dark .NavMenu-el-icon-style
{
    color: #ffffff;
}
</style>