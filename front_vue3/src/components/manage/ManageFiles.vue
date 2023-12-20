<template>
<el-scrollbar v-loading="loading" element-loading-text="Loading . . .">
    <div class="ManageIndex-out-div" :style="outDivHeight">
        <el-card class="ManageNotes-el-card" :style="bodyHeight">
                <el-row>
                    <el-col :span="16">
                        <el-input
                        v-model="search"
                        :placeholder="placeholderText"
                        class="manageTime-input-with-select"
                        clearable
                        >
                        <template #append>
                            <el-button type="danger" icon="Search" class="manageTime-button-icon" @click="clickSearch()"/>
                        </template>
                        </el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-tooltip effect="light" placement="bottom">
                            <template #content>
                                <p class="NavMenu-tooltip-p-style">{{ $t("common.refresh") }}</p>
                            </template>
                            <el-button type="success" style="margin-left: 10px;" plain @click="clickRefresh()">
                                <el-icon>
                                    <Refresh />
                                </el-icon>
                            </el-button>
                        </el-tooltip>
                    </el-col>
                </el-row>
                <el-scrollbar :height="scrollCardHeight" style="margin-top: 10px;">
                    <el-card
                    v-for="(item,i) in files"
                    :key="i"
                    class="common-with-back-el-card-style"
                    >
                        <span class="manageFiles-name-text">{{ item.name }}</span>
                        <el-tag
                            checked
                            size="small"
                            class="ResourcesCard-el-tag-style"
                            type="success"
                            effect="dark"
                            >
                            {{ item.type }}
                        </el-tag>
                        <el-icon size="10px" class="NotesCard-el-icon-style"><List/></el-icon>
                        <span class="NotesCard-tag-text-style">
                            {{ $t("notes.date") }} {{ item.file }}
                        </span>
                    </el-card>
                </el-scrollbar>
            </el-card>
        </div>
    </el-scrollbar>
</template>

<script>
import managefiles from "@/assets/js/manage/ManageFiles.js";
export default managefiles;
</script>

<style scope>
@import "@/assets/css/manage/ManageFiles.css";
@import "@/assets/css/manage/ManageIndex.css";
@import '@/assets/css/common.css';
@import "@/assets/css/notes/NotesCard.css";
@import "@/assets/css/manage/ManageNotes.css";
</style>