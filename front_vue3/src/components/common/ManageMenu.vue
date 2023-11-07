<template>
    <div class="ManageMenu-menu-div">
        <el-menu
            router
            class="ManageMenu-el-menu"
            background-color="rgba(255,255,255,0.5)"
            text-color="#ffffff"
            active-text-color="#ff8f8f"
            :default-active="defaultActive"
            :collapse="isCollapse"
        >
            <el-menu-item @click="clickChange()" class="ManageMenu-menu-text-style">
                <el-icon class="ManageMenu-el-icon">
                    <component :is="buttonIcon"></component>
                </el-icon>
                <template #title>{{ $t("menu.collapse") }}</template>
            </el-menu-item>
            <el-menu-item
                v-for="(item, i) in navList"
                :index="item.name"
                :key="i"
                class="ManageMenu-menu-text-style"
            >
                <el-icon>
                    <component :is="item.icon"></component>
                </el-icon>
                <template #title>{{ item.navItem }}</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import managemenu from "@/assets/js/common/ManageMenu.js";
export default managemenu;
</script>

<style scope>
@import "@/assets/css/common/ManageMenu.css";
</style>