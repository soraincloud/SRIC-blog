<template>
<div class="common-pack-div" v-loading="loading" element-loading-text="Loading . . .">
    <el-image class="NotesIndex-backTop-image-style" :src="backTop" @click="backToTop()" :style="bottomData"></el-image>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="5">
            <el-scrollbar :height="categoryHeight">
                <notes-aside ref="getCategory" @loadAllNotesFormAside="loadAllNotes" @loadNotesFromAside="loadNotesByCategory" />
            </el-scrollbar>
        </el-col>
        <el-col :span="12">
            <el-scrollbar  @scroll="handleScroll($event)" ref="indexScroll" :height="indexHeight">
                <notes-card ref="loadAllNotesToCard" @isLoading="loading = $event" />
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
    import notesindex from "@/assets/js/notes/NotesIndex.js"
    export default notesindex
</script>

<style>
    @import '@/assets/css/notes/NotesIndex.css';
</style>