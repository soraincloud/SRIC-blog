<template>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="5"></el-col>
        <el-col :span="12">
            <index-head/>
            <index-used/>
        </el-col>
        <el-col :span="5">
            <aside-message/>
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>
</template>

<script>
import AsideMessage from '@/components/common/AsideMessage'
import IndexHead from '@/components/Home/IndexHead'
import IndexUsed from '@/components/Home/IndexUsed'

export default
{
    name: 'AppIndex',
    components: { AsideMessage,IndexHead,IndexUsed }
}
</script>

<style>
.el-main
{
    padding: 0%;
}

.container
{
            width: 100%;
            height: 200px;
            position: fixed;
            z-index: -1;
            opacity: 0.37;
            bottom: 0;
            left: 0;
}
</style>