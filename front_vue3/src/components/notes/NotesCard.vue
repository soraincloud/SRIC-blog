<template>
    <div>
        <el-card 
        v-for="(item,i) in notes" 
        :key="i" 
        class="common-with-back-el-card-style" 
        :style="[item.backgrounds]"
        @mouseover="over(i)"
        @mouseleave="leave(i)"
        >
            <h1 class="common-text-style">{{item.title}}</h1>
            <div>
                <el-icon size="10px" class="NotesCard-el-icon-style"><Histogram/></el-icon>
                <span class="NotesCard-tag-text-style">访问量：{{item.visited}}</span>
            </div>
            <el-divider class="common-el-divider-style" />
            <p class="common-text-style">{{item.description}}</p>
        </el-card>
    </div>
</template>

<script>
    import notescard from "@/assets/js/notes/NotesCard.js"
    export default notescard
</script>

<style scoped>
    @import '@/assets/css/common.css';
    @import '@/assets/css/notes/NotesCard.css';
</style>