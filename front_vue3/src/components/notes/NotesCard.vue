<template>
    <el-card
        v-for="(item, i) in notes"
        :key="i"
        class="common-with-back-el-card-style"
        :style="[item.backgrounds]"
        @mouseover="over(i)"
        @mouseleave="leave(i)"
        @click="clickCard(i)"
    >
        <h1 class="common-text-style">{{ item.title }}</h1>
        <div>
            <el-icon size="10px" class="NotesCard-el-icon-style"><Histogram/></el-icon>
            <span class="NotesCard-tag-text-style">
                {{ $t("notes.visit") }} {{ item.visited }}
            </span>
            <el-icon size="10px" class="NotesCard-el-icon-style"><UserFilled/></el-icon>
            <span class="NotesCard-tag-text-style">
                {{ $t("notes.created") }} {{ item.username }}
            </span>
            <el-icon size="10px" class="NotesCard-el-icon-style"><List/></el-icon>
            <span class="NotesCard-tag-text-style">
                {{ $t("notes.date") }} {{ item.date }}
            </span>
        </div>
        <el-divider class="common-el-divider-style" />
        <p class="common-text-style">{{ item.description }}</p>
    </el-card>
</template>

<script>
import notescard from "@/assets/js/notes/NotesCard.js";
export default notescard;
</script>

<style scoped>
@import "@/assets/css/common.css";
@import "@/assets/css/notes/NotesCard.css";
</style>