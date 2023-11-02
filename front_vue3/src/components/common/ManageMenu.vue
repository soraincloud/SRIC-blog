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
            @open="handleOpen"
            @close="handleClose"
        >
            <el-menu-item
                v-for="(item, i) in navList"
                :index="item.name"
                :key="i"
                class="ManageMenu-menu-text-style"
            >
                <el-icon>
                    <component :is="item.icon"></component>
                </el-icon>
                {{ item.navItem }}
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