<!--
- 使用 window.onresize 检测页面发生变化
- 使用 window.innerHeight 获取当前页面高度
-->

<template>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="5">
            <index-aside/>
        </el-col>
        <el-col :span="12">
            <el-scrollbar :height="indexHeight">
                <index-head id="appindex-card-0" />
                <index-used id="appindex-card-1" />
                <index-about id="appindex-card-2" />
                <index-time id="appindex-card-3" />
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
import IndexHead from '@/components/Home/IndexHead'
import IndexUsed from '@/components/Home/IndexUsed'
import IndexAbout from '@/components/Home/IndexAbout'
import IndexTime from '@/components/Home/IndexTime'
import IndexAside from '@/components/Home/IndexAside'

export default
{
    name: 'AppIndex',
    components: { AsideMessage,IndexHead,IndexUsed,IndexAbout,IndexTime,IndexAside },
    data()
    {
        return{
            indexHeight: (window.innerHeight - 70) + 'px',
            asideHeight: (window.innerHeight - 70) + 'px'
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.indexHeight = (window.innerHeight - 70) + 'px'
            this.asideHeight = (window.innerHeight - 70) + 'px'
        }
    }
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