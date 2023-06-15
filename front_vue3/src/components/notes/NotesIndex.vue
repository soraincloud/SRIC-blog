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
import AsideMessage from '@/components/common/AsideMessage'
import NotesCard from '@/components/notes/NotesCard'
import NotesAside from '@/components/notes/NotesAside'

export default
{
    name:'NotesIndex',
    components: { AsideMessage,NotesCard,NotesAside },
    data()
    {
        return{
            indexHeight: (window.innerHeight - 70) + 'px',
            asideHeight: (window.innerHeight - 70) + 'px',
            categoryHeight: (window.innerHeight - 70) + 'px',
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.indexHeight = (window.innerHeight - 70) + 'px'
            this.asideHeight = (window.innerHeight - 70) + 'px'
            this.categoryHeight = (window.innerHeight - 70) + 'px'
        }
    },
    methods:
    {
        loadAllNotes()
        {
            this.$refs.loadAllNotesToCard.loadNotes()
        },
        loadNotesByCategory()
        {
            var _this = this
            var categoryNeed = this.$refs.getCategory.categoryNeed
            this.$axios
            .get('/notesListByCategory',{ params:{ category: categoryNeed } })
            .then(resp => 
            {
                if (resp && resp.status === 200)
                {
                    _this.$refs.loadAllNotesToCard.notes = resp.data
                }
            })
        }
    }
}
</script>