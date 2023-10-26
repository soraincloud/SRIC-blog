<template>
    <el-image
        class="NotesIndex-backTop-image-style"
        :src="backTop"
        @click="backToTop()"
        :style="bottomData"
    ></el-image>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="5">
            <el-scrollbar :height="categoryHeight">
                <resources-aside
                    ref="getCategory"
                    @loadAllResourcesFormAside="loadAllResources"
                    @loadResourcesFromAside="loadResourcesByCategory"
                />
            </el-scrollbar>
        </el-col>
        <el-col :span="12">
            <el-scrollbar
                @scroll="handleScroll($event)"
                ref="indexScroll"
                :height="indexHeight"
            >
                <div class="NotesIndex-middle-div-style" :style="top">
                    <resources-card ref="loadAllResourcesToCard" />
                </div>
            </el-scrollbar>
        </el-col>
        <el-col :span="5">
            <el-scrollbar :height="asideHeight">
                <aside-message />
            </el-scrollbar>
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>
</template>

<script>
import resourcesindex from "@/assets/js/resources/ResourcesIndex.js";
export default resourcesindex;
</script>

<style>
@import "@/assets/css/notes/NotesIndex.css";
</style>