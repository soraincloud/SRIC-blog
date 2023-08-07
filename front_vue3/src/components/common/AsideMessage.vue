<!--
- 注意覆盖组件库默认样式时 style 不能使用 scoped
-->

<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="AsideMessage-el-card-style" :style="active">
            <div class="AsideMessage-message-div-style">
                <el-avatar :src="SRICAvater" class="AsideMessage-el-avater-style" fit="scale-down"></el-avatar>
                <div class="AsideMessage-name-div-style">
                    <span>soraincloud</span>
                    <el-tag checked size="small" class="AsideMessage-el-tag-style" type="danger" effect="dark">neko</el-tag>
                </div>
                <el-divider class="AsideMessage-el-divider-style">
                    <el-icon class="AsideMessage-divider-icon-style" size="20px"><StarFilled/></el-icon>
                </el-divider>
            </div>
            <div>
                <link-card></link-card>
            </div>
        </el-card>
    </div>
</template>

<script>
    import asidemessage from "@/assets/js/common/AsideMessage.js"
    export default asidemessage
</script>

<style>
    @import '@/assets/css/common/AsideMessage.css';
</style>