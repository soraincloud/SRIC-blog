<template>
<el-scrollbar>
    <div class="ManageIndex-out-div">
        <el-card class="ManageIndex-el-card" :style="[bodyHeight,showLeft]">
            <el-row>
                <el-col :span="8">
                    <el-scrollbar>
                    <el-card class="NotesAside-el-card-style" @mouseover="mouseOver(0)" @mouseleave="mouseLeave(0)" :style="back0">
                        <h1 class="common-text-style" style="margin-top: 64px">{{ $t('notes.head') }}</h1>
                        <el-divider class="common-el-divider-style" />
                        <el-card
                        v-for="(item,i) in category"
                        :key="i"
                        shadow="never"
                        class="NotesAside-item-card-style"
                        :style="item.backgrounds"
                        @mouseover="over(i)"
                        @mouseleave="leave(i)"
                        @click="choose(i)"
                        >
                        <el-icon size="20px" style="float:right">
                            <component :is="item.icon"></component>
                        </el-icon>
                        {{item.content}}
                        </el-card>
                    </el-card>
                    </el-scrollbar>
                </el-col>
                <el-col :span="16">
                    <div style="margin-top:10px;">
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
                                    <p class="NavMenu-tooltip-p-style">{{ $t("common.add") }}</p>
                                </template>
                                <el-button type="danger" style="margin-left: 10px;" plain @click="clickAdd()">
                                    <el-icon>
                                        <CirclePlusFilled />
                                    </el-icon>
                                </el-button>
                            </el-tooltip>
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
                    </div>
                    <el-scrollbar :height="scrollCardHeight" style="margin-top:10px;">
                    <el-card
                        v-for="(item, i) in notes"
                        :key="i"
                        class="common-with-back-el-card-style"
                        :style="[item.backgrounds]"
                        @mouseover="cardOver(i)"
                        @mouseleave="cardLeave(i)"
                    >
                        <h1 class="common-text-style">{{ item.title }}</h1>
                        <div>
                            <el-icon size="10px" class="NotesCard-el-icon-style"><Histogram/></el-icon>
                            <span class="NotesCard-tag-text-style">
                                {{ $t("notes.visit") }} {{ item.visited }}
                            </span>
                            <el-icon size="10px" class="NotesCard-el-icon-style"><UserFilled/></el-icon>
                            <span class="NotesCard-tag-text-style">
                                {{ $t("notes.created") }} {{ item.username }}
                            </span>
                            <el-icon size="10px" class="NotesCard-el-icon-style"><List/></el-icon>
                            <span class="NotesCard-tag-text-style">
                                {{ $t("notes.date") }} {{ item.date }}
                            </span>
                        </div>
                        <el-divider class="common-el-divider-style"/>
                        <el-popconfirm
                        :title="deleteTitle"
                        :confirm-button-text="deleteOk"
                        :cancel-button-text="deleteCancel"
                        confirm-button-type="danger"
                        icon="DeleteFilled"
                        icon-color="#FF8F8F"
                        width="250"
                        @confirm="deleteConfirm(i)"
                        >
                            <template #reference>
                            <el-button class="manageTime-el-button" type="danger" size="small" plain>
                                {{ $t('common.delete') }}
                            </el-button>
                            </template>
                        </el-popconfirm>
                        <el-button class="manageTime-el-button" type="warning" size="small" plain @click="clickEdit(i)">
                            {{ $t('common.edit') }}
                        </el-button>
                        <p class="common-text-style">{{ item.description }}</p>
                    </el-card>
                    </el-scrollbar>
                </el-col>
            </el-row>
        </el-card>
    </div>
</el-scrollbar>
</template>

<script>
import managenotes from "@/assets/js/manage/ManageNotes.js";
export default managenotes;
</script>

<style scope>
@import "@/assets/css/manage/ManageIndex.css";
@import '@/assets/css/common.css';
@import '@/assets/css/notes/NotesAside.css';
@import "@/assets/css/notes/NotesCard.css";
@import "@/assets/css/manage/ManageTime.css";
@import "@/assets/css/common/NavMenu.css";
</style>