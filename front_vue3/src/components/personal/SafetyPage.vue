<template>
    <el-image class="SafetyPage-image-anger-style" :src="anger"></el-image>
    <el-row>
        <el-col :span="12"></el-col>
        <el-col :span="10">
            
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
</template>

<script>
    import safetypage from "@/assets/js/personal/SafetyPage.js"
    export default safetypage
</script>

<style scoped>
    @import '@/assets/css/personal/SafetyPage.css';
</style>