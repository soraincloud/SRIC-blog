<template>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="5">
            <el-scrollbar :height="categoryHeight">
                <notes-aside ref="getCategory" @loadAllNotesFormAside="loadAllNotes" @loadNotesFromAside="loadNotesByCategory" />
            </el-scrollbar>
        </el-col>
        <el-col :span="12">
            <el-scrollbar :height="indexHeight">
                <notes-card ref="loadAllNotesToCard" />
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
    import notesindex from "@/assets/js/notes/NotesIndex.js"
    export default notesindex
</script>