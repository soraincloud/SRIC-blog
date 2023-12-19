<template>
    <el-image
        class="SettingPage-image-anger-style"
        :src="gameWarma"
        :style="bottomData"
    ></el-image>
    <el-row>
        <el-col :span="12">
            <div class="PersonalIndex-avater-div-style" :style="paddingTop">
                <el-upload
                v-model:file-list="fileList"
                action
                accept=".jpg,.jpeg,.png"
                :on-exceed="handleExceed"
                :before-upload="beforeUpload"
                :show-file-list="false"
                :http-request="uploadFile"
                >
                    <el-avatar
                        :src="avatar"
                        :size="150"
                        fit="scale-down"
                    ></el-avatar>
                </el-upload>
                <p class="PersonalIndex-name-style">{{ username }}</p>
                <el-tag
                    v-for="(item, i) in tags"
                    :key="i"
                    effect="light"
                    type="danger"
                    size="small"
                    class="PersonalIndex-el-tag-style"
                    closable
                >
                    {{ item.content }}
                </el-tag>
                <p class="PersonalIndex-mark-style">{{ mark }}</p>
            </div>
        </el-col>
        <el-col :span="10">
            <div :style="paddingTop">
                <el-card class="LoginPage-el-card-style">
                    <h1 class="SettingPage-setting-title-style">
                        {{ $t("setting.settingTitle") }}
                    </h1>
                    <el-input
                        v-model="usernameInput"
                        maxlength="20"
                        :placeholder="usernameHoder"
                        type="text"
                        class="SettingPage-el-input-style"
                        clearable
                    >
                        <template #append>
                            <el-button @click="clickUsernameSubmit">
                                {{ $t("login.submit") }}
                            </el-button>
                        </template>
                    </el-input>
                    <div class="SettingPage-input-div-style">
                        <el-input
                            v-model="markInput"
                            maxlength="50"
                            :placeholder="messageHoder"
                            type="text"
                            class="SettingPage-el-input-style"
                            clearable
                        >
                            <template #append>
                                <el-button @click="clickMessageSubmit">
                                    {{ $t("login.submit") }}
                                </el-button>
                            </template>
                        </el-input>
                    </div>
                    <div class="SettingPage-input-div-style">
                        <el-row>
                            <el-col :span="6">
                                <el-button
                                    class="SettingPage-input-button-style"
                                    type="danger"
                                    @click="switchBack"
                                    >{{ $t("login.back") }}</el-button
                                >
                            </el-col>
                            <el-col :span="3"></el-col>
                            <el-col :span="6">
                                <el-button
                                    class="SettingPage-input-button-style"
                                    type="danger"
                                    @click="switchSafety"
                                    >{{ $t("login.safety") }}</el-button
                                >
                            </el-col>
                            <el-col :span="3"></el-col>
                            <el-col :span="6">
                                <el-button
                                    class="SettingPage-input-button-style"
                                    type="danger"
                                    @click="switchQuit"
                                    >{{ $t("login.quit") }}</el-button
                                >
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>

    <el-dialog
        v-model="dialogVisible"
        title="o.0?"
        width="30%"
        style="font-weight: bold"
    >
        <span>{{ $t("login.reallyquit") }}</span>
        <template #footer>
            <span class="dialog-footer">
                <el-row>
                    <el-col :span="10">
                        <el-button
                            class="SettingPage-input-button-style"
                            type="danger"
                            @click="dialogVisible = false"
                            >{{ $t("login.no") }}</el-button
                        >
                    </el-col>
                    <el-col :span="4"></el-col>
                    <el-col :span="10">
                        <el-button
                            class="SettingPage-input-button-style"
                            type="danger"
                            @click="quiting"
                            >{{ $t("login.yes") }}</el-button
                        >
                    </el-col>
                </el-row>
            </span>
        </template>
    </el-dialog>

    <el-dialog
        v-model="submitDialogVisible"
        title="o.0?"
        width="30%"
        style="font-weight: bold"
    >
        <h2>{{ $t("setting.reallyChange") }}</h2>
        <span v-if="submitDialog == 0">{{ $t("message.pleaseOfferPassword") }}</span>
        <el-input v-if="submitDialog == 0" style="margin-top: 10px;" v-model="password" type="password" show-password></el-input>
        <template #footer>
            <span class="dialog-footer">
                <el-row>
                    <el-col :span="10">
                        <el-button
                            class="SettingPage-input-button-style"
                            type="danger"
                            @click="cancelChange"
                            >{{ $t("login.no") }}</el-button
                        >
                    </el-col>
                    <el-col :span="4"></el-col>
                    <el-col :span="10">
                        <el-button
                            class="SettingPage-input-button-style"
                            type="danger"
                            @click="submitChange"
                            >{{ $t("login.yes") }}</el-button
                        >
                    </el-col>
                </el-row>
            </span>
        </template>
    </el-dialog>

    <el-dialog
    v-model="imageDialogVisible"
    width="50%"
    >
        <div style="height:300px;">
            <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :canScale="false"
            :autoCrop="true"
            :fixed="true"
            :canMove="false"
            ></vueCropper>
        </div>
        <el-button @click="clickApply()" style="margin-top:10px;" type="danger" plain>
            {{ $t("common.apply") }}
        </el-button>
    </el-dialog>
</template>

<script>
import settingpage from "@/assets/js/personal/SettingPage.js";
export default settingpage;
</script>

<style scoped>
@import "@/assets/css/personal/PersonalIndex.css";
@import "@/assets/css/personal/LoginPage.css";
@import "@/assets/css/personal/SettingPage.css";
</style>