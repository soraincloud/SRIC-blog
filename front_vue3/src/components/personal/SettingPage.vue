<template>
    <el-row>
        <el-col :span="12">
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
        </el-col>
        <el-col :span="10">
            <div :style="paddingTop">
                <el-card class="LoginPage-el-card-style">
                    <div style="margin-top:64px;">
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
                                    {{ $t('login.submit') }}
                                </el-button>
                            </template>
                        </el-input>
                    </div>
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
                                    {{ $t('login.submit') }}
                                </el-button>
                            </template>
                        </el-input>
                    </div>
                    <div class="SettingPage-input-div-style">
                        <el-row>
                            <el-col :span="6">
                                <el-button class="SettingPage-input-button-style" type="danger" @click="switchBack">{{ $t('login.back') }}</el-button>
                            </el-col>
                            <el-col :span="3"></el-col>
                            <el-col :span="6">
                                <el-button class="SettingPage-input-button-style" type="danger" @click="switchSafety">{{ $t('login.safety') }}</el-button>
                            </el-col>
                            <el-col :span="3"></el-col>
                            <el-col :span="6">
                                <el-button class="SettingPage-input-button-style" type="danger" @click="switchQuit">{{ $t('login.quit') }}</el-button>
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
        style="font-weight:bold;"
        :before-close="handleClose"
        >
        <span>{{ $t('login.reallyquit') }}</span>
        <template #footer>
        <span class="dialog-footer">
            <el-row>
                <el-col :span="10">
                    <el-button class="SettingPage-input-button-style" type="danger" @click="dialogVisible = false">{{ $t('login.no') }}</el-button>
                </el-col>
                <el-col :span="4"></el-col>
                <el-col :span="10">
                    <el-button class="SettingPage-input-button-style" type="danger" @click="quiting">{{ $t('login.yes') }}</el-button>
                </el-col>
            </el-row>
        </span>
        </template>
    </el-dialog>

</template>

<script>
    import settingpage from "@/assets/js/personal/SettingPage.js"
    export default settingpage
</script>

<style scoped>
    @import '@/assets/css/personal/PersonalIndex.css';
    @import '@/assets/css/personal/LoginPage.css';
    @import '@/assets/css/personal/SettingPage.css';
</style>