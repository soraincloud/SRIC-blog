<template>
    <el-image
        class="PersonalIndex-image-anger-style"
        :src="game"
        :style="leftData"
    ></el-image>
    <div class="PersonalIndex-affix-div-style">
        <el-affix>
            <el-button 
            v-if="userId == null"
            @click="switchLogin"
            color="#ff6666" 
            class="PersonalIndex-affix-button-style" 
            plain>
            <el-icon class="PersonalIndex-affix-icon-style"><User/></el-icon>
            {{ $t('login.login') }}
            </el-button>
            <el-button 
            v-if="userId == null"
            @click="switchSignup"
            color="#ff6666" 
            class="PersonalIndex-affix-button-style" 
            plain>
            <el-icon class="PersonalIndex-affix-icon-style"><EditPen/></el-icon>
            {{ $t('login.signup') }}
            </el-button>
            <el-button 
            v-if="userId != null"
            @click="switchSetting"
            color="#ff6666" 
            class="PersonalIndex-affix-button-style" 
            plain>
            <el-icon class="PersonalIndex-affix-icon-style"><Operation/></el-icon>
            {{ $t('login.operation') }}
            </el-button>
        </el-affix>
    </div>
    <div class="PersonalIndex-avater-div-style" :style="paddingTop">
        <el-avatar :src="require('@/assets/images/logo/' + avatar)" :size="150" fit="scale-down"></el-avatar>
        <p class="PersonalIndex-name-style">{{ username }}</p>
        <el-tag
        v-for="(item,i) in tags"
        :key="i"
        effect="light"
        type="danger"
        size="small"
        class="PersonalIndex-el-tag-style"
        >
        {{ item.content }}
        </el-tag>
        <p class="PersonalIndex-mark-style">{{ mark }}</p>
    </div> 
</template>

<script>
    import personalindex from "@/assets/js/personal/PersonalIndex.js"
    export default personalindex
</script>

<style>
    @import '@/assets/css/personal/PersonalIndex.css';
</style>