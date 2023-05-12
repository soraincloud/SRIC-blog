<template>
    <el-row>
        <el-col :span="2"></el-col>
        <el-col :span="5"></el-col>
        <el-col :span="10"></el-col>
        <el-col :span="5">
            <aside-message/>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
</template>

<script>
import AsideMessage from "@/components/common/AsideMessage"
export default
{
    name: 'AppIndex',
    components: { AsideMessage }
}
</script>
