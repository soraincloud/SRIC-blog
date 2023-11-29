<template>
    <el-scrollbar :height="bodyHeight" v-loading="loading" element-loading-text="Loading . . .">
        <div class="ManageIndex-out-div">
            <el-card class="ManageIndex-el-card" style="padding-top:0px;">
                <el-row>
                    <el-col :span="8">
                        <div @mouseover="mouseOver" @mouseleave="mouseLeave">
                            <el-card class="NotesAside-el-card-style" :style="active">
                                <h1 class="common-text-style" style="margin-top: 64px">{{ $t('notes.head') }}</h1>
                                <el-divider class="common-el-divider-style" />
                                <el-card
                                v-for="(item,i) in category"
                                :key="i"
                                shadow="never"
                                class="NotesAside-item-card-style"
                                :style="item.backgrounds"
                                @mouseover="over(i)"
                                @mouseleave="leave(i)"
                                @click="choose(i)"
                                >
                                <el-icon size="20px" style="float:right">
                                    <component :is="item.icon"></component>
                                </el-icon>
                                {{item.content}}
                                </el-card>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="16"></el-col>
                </el-row>
            </el-card>
        </div>
    </el-scrollbar>
</template>

<script>
import managenotescategory from "@/assets/js/manage/ManageNotesCategory.js";
export default managenotescategory;
</script>

<style scope>
@import "@/assets/css/manage/ManageIndex.css";
@import '@/assets/css/common.css';
@import '@/assets/css/notes/NotesAside.css';
</style>