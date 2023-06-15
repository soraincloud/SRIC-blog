<template>
    <div class="PersonalIndex-avater-div-style" :style="marginTop">
        <el-avatar :src="avatar" :size="150" fit="scale-down"></el-avatar>
        <p class="PersonalIndex-text-style">{{ username }}</p>
    </div> 
</template>

<script>
export default
{
    name: 'RersonalIndex',
    data()
    {
        return{
            avatar: require('@/assets/images/logo/head-main.png'),
            username: '没登陆所以没昵称哦',
            marginTop: "margin-top:" + (window.innerHeight * 0.2) + "px;",
        }
    },
    mounted()
    {
        window.addEventListener('resize',() =>
            this.marginTop = "margin-top:" + (window.innerHeight * 0.2) + "px;",
        )
    },
}
</script>

<style>
    @import '@/assets/css/personal/PersonalIndex.css';
</style>