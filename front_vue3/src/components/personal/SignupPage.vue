<template>
    <el-row>
        <el-col :span="12"></el-col>
        <el-col :span="8">
            <div :style="paddingTop">
                <el-card class="LoginPage-el-card-style">
                    <h1 class="SettingPage-setting-title-style">
                        {{ $t("login.signup") }}
                    </h1>
                    <el-form>
                        <el-form-item>
                            <template v-slot:label>
                                {{ $t("login.username") }}
                            </template>
                            <el-input v-model="form.username">
                                <template #prefix>
                                    <el-icon><User /></el-icon>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <template v-slot:label>
                                {{ $t("login.password") }}
                            </template>
                            <el-input
                                v-model="form.password"
                                type="password"
                                show-password
                            >
                                <template #prefix>
                                    <el-icon><Lock /></el-icon>
                                </template>
                            </el-input>
                        </el-form-item>
                    </el-form>
                    <div class="SettingPage-input-div-style">
                        <el-row>
                            <el-col :span="16"></el-col>
                            <el-col :span="6">
                                <el-button
                                    class="SettingPage-input-button-style"
                                    type="danger"
                                    @click="switchSubmit"
                                    >{{ $t("login.signup") }}</el-button
                                >
                            </el-col>
                            <el-col :span="2"></el-col>
                        </el-row>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
</template>

<script>
import signuppage from "@/assets/js/personal/SignupPage.js";
export default signuppage;
</script>

<style>
@import "@/assets/css/personal/LoginPage.css";
@import "@/assets/css/personal/SafetyPage.css";
@import "@/assets/css/personal/SettingPage.css";
</style>