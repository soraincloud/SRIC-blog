<template>
    <el-row>
        <el-col :span="8"></el-col>
        <el-col :span="8">
            <div :style="paddingTop" @mouseover="mouseOver" @mouseleave="mouseLeave">
                <el-card class="LoginPage-el-card-style" :style="active">
                    <div class="LoginPage-inside-div-style">
                        <h1 class="LoginPage-title-style">登 录</h1>
                        <el-form>
                            <el-form-item label="账户">
                                <el-input v-model="form.username">
                                    <template #prefix>
                                        <el-icon><User /></el-icon>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="form.password" type="password" show-password>
                                    <template #prefix>
                                        <el-icon><Lock /></el-icon>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button 
                                @click="login"
                                size="small" 
                                class="LoginPage-submit-button-style" 
                                style="margin-left:40px" 
                                type="danger" 
                                plain>登录</el-button>
                                <el-button 
                                size="small" 
                                class="LoginPage-submit-button-style" 
                                type="danger" 
                                plain>忘记密码</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="8"></el-col>
    </el-row>
</template>

<script>
    import loginpage from "@/assets/js/personal/LoginPage.js"
    export default loginpage
</script>


<style>
    @import '@/assets/css/personal/LoginPage.css';
</style>