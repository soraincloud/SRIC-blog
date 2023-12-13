<template>
<div class="common-pack-div" v-loading="loading" element-loading-text="Loading . . .">
    <el-image class="NotesIndex-backTop-image-style" :src="backTop" @click="backToTop()" :style="bottomData"></el-image>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="5">
            <el-scrollbar :height="categoryHeight">
                <resources-aside ref="getCategory" @loadAllResourcesFormAside="loadAllResources" @loadResourcesFromAside="loadResourcesByCategory" />
            </el-scrollbar>
        </el-col>
        <el-col :span="12">
            <div class="notesIndex-search-div">
            <el-row>
                <el-col :span="20">
                    <el-input
                    v-model="search"
                    :placeholder="placeholderText"
                    class="manageTime-input-with-select"
                    clearable
                    >
                    <template #append>
                        <el-button type="danger" icon="Search" class="manageTime-button-icon" @click="clickSearch()"/>
                    </template>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-tooltip effect="light" placement="bottom">
                        <template #content>
                            <p class="NavMenu-tooltip-p-style">{{ $t("common.refresh") }}</p>
                        </template>
                        <el-button type="success" style="margin-left: 10px;" plain @click="clickRefresh()">
                            <el-icon>
                                <Refresh />
                            </el-icon>
                        </el-button>
                    </el-tooltip>
                </el-col>
            </el-row>
            </div>
            <el-scrollbar  @scroll="handleScroll($event)" ref="indexScroll" :height="indexHeight">
                <resources-card ref="loadAllResourcesToCard" @isLoading="loading = $event" />
            </el-scrollbar>
        </el-col>
        <el-col :span="5">
            <el-scrollbar :height="asideHeight">
                <aside-message />
            </el-scrollbar>
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>
</div>
</template>

<script>
    import resourcesindex from "@/assets/js/resources/ResourcesIndex.js"
    export default resourcesindex
</script>

<style>
    @import '@/assets/css/notes/NotesIndex.css';
</style>