<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="NotesAside-el-card-style" :style="[active,top]">
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
</template>

<script>
    import notesaside from "@/assets/js/notes/NotesAside.js"
    export default notesaside
</script>

<style>
    @import '@/assets/css/common.css';
    @import '@/assets/css/notes/NotesAside.css';
</style>