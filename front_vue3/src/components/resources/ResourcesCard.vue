<template>
    <div
        v-loading.fullscreen.lock="loading"
        element-loading-background="rgba(255,255,255,0.2)"
        element-loading-text="Loading . . ."
    >
        <el-card
            v-for="(item, i) in resources"
            :key="i"
            class="common-with-back-el-card-style"
            :style="[item.backgrounds]"
            @mouseover="over(i)"
            @mouseleave="leave(i)"
            @click="clickCard(i)"
        >
            <h1 class="common-text-style">{{ item.title }}</h1>
            <div>
                <el-tag
                    checked
                    size="small"
                    class="ResourcesCard-el-tag-style"
                    type="success"
                    effect="dark"
                    >{{ item.tag }}</el-tag
                >
                <el-icon size="10px" class="NotesCard-el-icon-style"
                    ><Histogram
                /></el-icon>
                <span class="NotesCard-tag-text-style"
                    >{{ $t("notes.visit") }} {{ item.visited }}</span
                >
            </div>
        </el-card>
    </div>
</template>

<script>
import resourcescard from "@/assets/js/resources/ResourcesCard.js";
export default resourcescard;
</script>

<style scoped>
@import "@/assets/css/common.css";
@import "@/assets/css/notes/NotesCard.css";
@import "@/assets/css/resources/ResourcesCard.css";
</style>