<template>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="5">
            <el-scrollbar :height="describeHeight">
                <el-card
                    class="NotesAside-el-card-style"
                    :style="describeBackgrounds"
                    @mouseover="describeOver()"
                    @mouseleave="describeLeave()"
                >
                    <h1 class="common-text-style" style="margin-top: 64px">
                        {{ $t("notes.note") }}
                    </h1>
                    <el-divider class="common-el-divider-style" />
                    <h1>{{ noteTitle }}</h1>
                    <h3>{{ noteDescription }}</h3>
                </el-card>
            </el-scrollbar>
        </el-col>
        <el-col :span="12">
            <el-scrollbar
                @scroll="handleScroll($event)"
                ref="indexScroll"
                :height="indexHeight"
            >
                <el-card
                    class="common-with-back-el-card-style"
                    :style="backgrounds"
                    @mouseover="over()"
                    @mouseleave="leave()"
                >
                </el-card>
            </el-scrollbar>
        </el-col>
        <el-col :span="5">
            <el-scrollbar :height="asideHeight">
                <aside-message />
            </el-scrollbar>
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>
</template>

<script>
import notesshow from "@/assets/js/notes/NotesShow.js";
export default notesshow;
</script>

<style scoped>
@import "@/assets/css/common.css";
@import "@/assets/css/notes/NotesAside.css";
</style>