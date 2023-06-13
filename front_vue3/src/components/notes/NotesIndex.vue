<template>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="5"></el-col>
        <el-col :span="12">
            <notes-card/>
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

export default
{
    name:'NotesIndex',
    components: { AsideMessage,NotesCard },
    data()
    {
        return{
            asideHeight: (window.innerHeight - 70) + 'px',
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.asideHeight = (window.innerHeight - 70) + 'px'
        }
    },
}
</script>
