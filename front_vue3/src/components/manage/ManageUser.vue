<template>
    <el-scrollbar v-loading="loading" element-loading-text="Loading . . .">
        <div class="ManageIndex-out-div" :style="outDivHeight">
            <el-card class="ManageNotes-el-card" :style="bodyHeight">
                <el-row>
                    <el-col :span="16">
                        <el-input
                        v-model="search"
                        :placeholder="placeholderText"
                        class="manageTime-input-with-select"
                        clearable
                        >
                        <template #append>
                            <el-button type="danger" icon="Search" class="manageTime-button-icon" @click="clickSearch()"/>
                        </template>
                        </el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-tooltip effect="light" placement="bottom">
                            <template #content>
                                <p class="NavMenu-tooltip-p-style">{{ $t("common.refresh") }}</p>
                            </template>
                            <el-button type="success" style="margin-left: 10px;" plain @click="clickRefresh()">
                                <el-icon>
                                    <Refresh />
                                </el-icon>
                            </el-button>
                        </el-tooltip>
                    </el-col>
                </el-row>
                    <el-card class="manageUser-el-card-style">
                        <el-row>
                            <el-col :span="4">
                                <p class="manageUser-p-text">{{ $t('user.avatar') }}</p>
                            </el-col>
                            <el-col :span="6">
                                <p class="manageUser-p-text">{{ $t('user.username') }}</p>
                            </el-col>
                            <el-col :span="10">
                                <p class="manageUser-p-text">{{ $t('user.mark') }}</p>
                            </el-col>
                            <el-col :span="4">
                                <p class="manageUser-p-text">{{ $t('user.status') }}</p>
                            </el-col>
                        </el-row>
                    </el-card>
                <el-scrollbar :height="scrollCardHeight" style="margin-top: 10px;">
                    <el-card
                    v-for="(item,i) in user"
                    :key="i"
                    class="common-with-back-el-card-style"
                    >
                        <el-row>
                            <el-col :span="4">
                                <el-avatar :src="item.avatarBase64" :size="50" fit="scale-down"></el-avatar>
                            </el-col>
                            <el-col :span="6">
                                <p class="manageUser-p-text">{{ item.username }}</p>
                            </el-col>
                            <el-col :span="10">
                                <p class="manageUser-p-text">{{ item.mark }}</p>
                            </el-col>
                            <el-col :span="4">
                                <el-switch
                                v-model="item.statusBool"
                                class="manageUser-el-switch"
                                @change="statusChange(i)"
                                ></el-switch>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-scrollbar>
            </el-card>
        </div>
    </el-scrollbar>
</template>

<script>
import manageuser from "@/assets/js/manage/ManageUser.js";
export default manageuser;
</script>

<style scope>
@import "@/assets/css/manage/ManageUser.css";
@import "@/assets/css/manage/ManageIndex.css";
@import '@/assets/css/common.css';
@import "@/assets/css/notes/NotesCard.css";
@import "@/assets/css/manage/ManageNotes.css";
</style>