<template>
    <div>
        <el-card 
        v-for="(item,i) in resources" 
        :key="i" 
        class="common-with-back-el-card-style" 
        :style="[item.backgrounds]"
        @mouseover="over(i)"
        @mouseleave="leave(i)"
        @click="clickCard(i)"
        >
            <h1 class="common-text-style">{{item.title}}</h1>
            <div>
                <el-icon size="10px" class="NotesCard-el-icon-style"><Histogram/></el-icon>
                <span class="NotesCard-tag-text-style">{{ $t("notes.visit") }} {{item.visited}}</span>
            </div>
            <el-divider class="common-el-divider-style" />
            <p class="common-text-style">{{item.description}}</p>
        </el-card>
    </div>
</template>

<script>
    import resourcescard from "@/assets/js/resources/ResourcesCard.js"
    export default resourcescard
</script>

<style scoped>
    @import '@/assets/css/common.css';
    @import '@/assets/css/notes/NotesCard.css';
</style>