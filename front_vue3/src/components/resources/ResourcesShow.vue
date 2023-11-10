<template>
    <el-button
        @click="clickBack"
        color="#ff6666"
        class="SafetyPage-back-button-style"
        plain
    >
        <el-icon class="SafetyPage-back-icon-style"><ArrowLeftBold /></el-icon>
        {{ $t("setting.back") }}
    </el-button>
    <el-image
        class="ResourcesShow-image-style"
        :src="guitar"
        :style="bottomData"
    ></el-image>
    <div>
        <h1 class="ResourcesShow-h1-text" :style="[h1Top, h1Left]">
            {{ resources.title }}
        </h1>
        <div class="ResourcesShow-tag-div" :style="[divTop, divLeft]">
            <el-tag
                checked
                size="small"
                class="ResourcesCard-el-tag-style"
                type="success"
                effect="dark"
                >{{ resources.tag }}</el-tag
            >
            <el-icon size="10px" class="ResourcesShow-el-icon-style"
                ><Histogram
            /></el-icon>
            <span class="ResourcesShow-tag-text-style"
                >{{ $t("notes.visit") }} {{ resources.visited }}</span
            >
        </div>
        <h3 class="ResourcesShow-h3-text" :style="[h3Top, h3Left]">
            {{ resources.description }}
        </h3>
        <el-button
            @click="clickDownload"
            color="#ff6666"
            class="ResourcesShow-back-button-style"
            plain
            :style="[buttonTop, buttonLeft]"
        >
            <el-icon class="ResourcesShow-back-icon-style"
                ><Download
            /></el-icon>
            {{ $t("resources.download") }}
        </el-button>
    </div>
</template>

<script>
import resourcesshow from "@/assets/js/resources/ResourcesShow.js";
export default resourcesshow;
</script>

<style scoped>
@import "@/assets/css/notes/NotesCard.css";
@import "@/assets/css/resources/ResourcesCard.css";
@import "@/assets/css/resources/ResourcesShow.css";
@import "@/assets/css/personal/SafetyPage.css";
</style>