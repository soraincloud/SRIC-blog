<template>
    <el-image
        class="SignupPage-image-anger-style"
        :src="angel"
        :style="bottomData"
    ></el-image>
    <el-button
        @click="clickBack"
        color="#ff6666"
        class="SafetyPage-back-button-style"
        plain
    >
        <el-icon class="SafetyPage-back-icon-style"><ArrowLeftBold /></el-icon>
        {{ $t("setting.back") }}
    </el-button>
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
                                >
                                    {{ $t("login.signup") }}
                                </el-button>
                            </el-col>
                            <el-col :span="2"></el-col>
                        </el-row>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>

    <el-dialog
        v-model="submitDialogVisible"
        title="o.0?"
        width="30%"
        style="font-weight: bold"
    >
        <span>{{ $t("login.bindMail") }}</span>
        <div class="SignupPage-input-div-style">
            <el-input
                v-model="mailInput"
                :placeholder="messageHoder"
                type="text"
                class="SettingPage-el-input-style"
                clearable
            >
            </el-input>
        </div>
        <div class="SignupPage-input-div-style">
            <el-input
                v-model="codeInput"
                :placeholder="messageHoder"
                type="text"
                class="SettingPage-el-input-style"
                clearable
            >
                <template #append>
                    <el-button @click="clickSendCode">
                        {{ $t("login.submit") }}
                    </el-button>
                </template>
            </el-input>
        </div>

        <template #footer>
            <span class="dialog-footer">
                <el-row>
                    <el-col :span="10">
                        <el-button
                            class="SettingPage-input-button-style"
                            type="danger"
                            @click="cancelSign"
                            >{{ $t("login.cancel") }}</el-button
                        >
                    </el-col>
                    <el-col :span="4"></el-col>
                    <el-col :span="10">
                        <el-button
                            class="SettingPage-input-button-style"
                            type="danger"
                            @click="submitSign"
                            >{{ $t("login.bind") }}</el-button
                        >
                    </el-col>
                </el-row>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import signuppage from "@/assets/js/personal/SignupPage.js";
export default signuppage;
</script>

<style>
@import "@/assets/css/personal/LoginPage.css";
@import "@/assets/css/personal/SafetyPage.css";
@import "@/assets/css/personal/SettingPage.css";
@import "@/assets/css/personal/SignupPage.css";
</style>