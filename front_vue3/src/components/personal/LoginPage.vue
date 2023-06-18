<template>
    <el-row>
        <el-col :span="8"></el-col>
        <el-col :span="8">
            <div :style="paddingTop">
                <el-card class="LoginPage-el-card-style">
                    <h1 class="LoginPage-title-style">登 录</h1>
                </el-card>
            </div>
        </el-col>
        <el-col :span="8"></el-col>
    </el-row>
</template>

<script>


export default
{
    name: 'LoginPage',
    data()
    {
        return{
            paddingTop: "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
        }
    }
}
</script>


<style>
    @import '@/assets/css/personal/LoginPage.css';
</style>