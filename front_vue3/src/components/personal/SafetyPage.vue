<template>
    <el-image class="SafetyPage-image-anger-style" :src="anger"></el-image>
    <el-row>
        <el-col :span="10"></el-col>
        <el-col :span="12">
            <div :style="paddingTop">
                <el-card class="SafetyPage-outside-card-style">
                    <h1 class="SettingPage-setting-title-style">
                        {{ $t("setting.safetyTitle") }}
                    </h1>
                    <el-divider class="AsideMessage-el-divider-style" />
                    <el-card
                        shadow="never"
                        class="SafetyPage-inside-card-style"
                        :style="[passwordBorder, passwordBackground]"
                        @mouseover="overPassword"
                        @mouseleave="leavePassword"
                    >
                        <h3 class="SafetyPage-h3-style">
                            {{ $t("setting.password") }}
                        </h3>
                        <el-row>
                            <el-col :span="18">
                                <div>{{ $t("setting.passwordShow") }}</div>
                            </el-col>
                            <el-col :span="6">
                                <el-button
                                    class="SafetyPage-button-style"
                                    type="danger"
                                    >1145</el-button
                                >
                            </el-col>
                        </el-row>
                    </el-card>
                    <el-card
                        shadow="never"
                        class="SafetyPage-inside-card-style"
                        :style="[phoneBorder, phoneBackground]"
                        @mouseover="overPhone"
                        @mouseleave="leavePhone"
                    >
                        <h3>{{ $t("setting.phone") }}</h3>
                        <el-row>
                            <el-col :span="18">
                                <div>{{ $t("setting.passwordShow") }}</div>
                            </el-col>
                            <el-col :span="6">
                                <el-button
                                    class="SafetyPage-button-style"
                                    type="danger"
                                    >1145</el-button
                                >
                            </el-col>
                        </el-row>
                    </el-card>
                    <el-card
                        shadow="never"
                        class="SafetyPage-inside-card-style"
                        :style="[mailBorder, mailBackground]"
                        @mouseover="overMail"
                        @mouseleave="leaveMail"
                    >
                        <h3>{{ $t("setting.mail") }}</h3>
                        <el-row>
                            <el-col :span="18">
                                <div>{{ $t("setting.passwordShow") }}</div>
                            </el-col>
                            <el-col :span="6">
                                <el-button
                                    class="SafetyPage-button-style"
                                    type="danger"
                                    >1145</el-button
                                >
                            </el-col>
                        </el-row>
                    </el-card>
                </el-card>
            </div>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
</template>

<script>
import safetypage from "@/assets/js/personal/SafetyPage.js";
export default safetypage;
</script>

<style>
@import "@/assets/css/personal/SafetyPage.css";
@import "@/assets/css/personal/LoginPage.css";
@import "@/assets/css/personal/SettingPage.css";
@import "@/assets/css/common/AsideMessage.css";
</style>