<template>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="5">
            <el-scrollbar :height="categoryHeight">
                <notes-aside/>
            </el-scrollbar>
        </el-col>
        <el-col :span="12">
            <el-scrollbar :height="indexHeight">
                <notes-card/>
            </el-scrollbar>
        </el-col>
        <el-col :span="5">
            <el-scrollbar :height="asideHeight">
                <aside-message/>
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
}
</script>