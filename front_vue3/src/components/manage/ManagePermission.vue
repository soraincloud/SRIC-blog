<template>
<el-scrollbar v-loading="loading" element-loading-text="Loading . . .">
    <div class="ManageIndex-out-div" :style="outDivHeight">
        <el-card class="ManageNotes-el-card" :style="bodyHeight">
            <el-select v-model="select">
                <el-option
                v-for="(item,i) in status"
                :key="i"
                :label="item.status"
                :value="item.id"
                >
                </el-option>
            </el-select>
            <el-scrollbar :height="scrollCardHeight" style="margin-top: 10px;">
                <el-card
                v-for="(item,i) in menus"
                :key="i"
                class="common-with-back-el-card-style"
                >
                    <el-row>
                        <el-col :span="12">
                            <span class="manageFiles-name-text">{{ item.zh }}</span>
                        </el-col>
                        <el-col :span="12">
                            <el-switch v-model="value1" />
                        </el-col>
                    </el-row>
                </el-card>
            </el-scrollbar>
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
@import "@/assets/css/manage/ManageFiles.css";
@import '@/assets/css/common.css';
@import "@/assets/css/notes/NotesCard.css";
</style>