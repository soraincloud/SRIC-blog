<template>
<el-scrollbar v-loading="loading" element-loading-text="Loading . . .">
    <div class="ManageIndex-out-div" :style="outDivHeight">
        <el-card class="ManageNotes-el-card" :style="bodyHeight">
            <el-row>
                <el-col :span="8"></el-col>
                <el-col :span="16"></el-col>
            </el-row>
        </el-card>
    </div>
</el-scrollbar>
</template>

<script>
import managepermission from "@/assets/js/manage/ManagePermission.js";
export default managepermission;
</script>

<style scope>
@import "@/assets/css/manage/ManageIndex.css";
@import "@/assets/css/manage/ManageNotes.css";
</style>