<template>
    <el-scrollbar :height="bodyHeight" v-loading="loading" element-loading-text="Loading . . .">
        <div class="ManageIndex-out-div">
            <el-card class="ManageIndex-el-card" style="padding-top:0px;">
                <el-row>
                    <el-col :span="8">
                        <div @mouseover="mouseOver(0)" @mouseleave="mouseLeave(0)">
                            <el-card class="NotesAside-el-card-style" :style="active0">
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
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <el-affix :offset="80">
                            <div @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)">
                                <el-card class="manageNotesCategory-el-card-style" :style="active1">
                                    <el-form
                                    label-position="right"
                                    :model="input"
                                    >
                                    <el-form-item :label="textLabel">
                                        <el-input v-model="input.content" />
                                    </el-form-item>
                                    <el-form-item :label="iconLabel">
                                        <el-icon size="20px" class="manageNotesCategory-left"><component :is="input.icon"></component></el-icon>
                                        <el-select v-model="input.icon" class="manageNotesCategory-select" :placeholder="selectPlaceholderText">
                                            <el-option
                                            v-for="(item,i) in icons"
                                            :key="i"
                                            :label="item.icon"
                                            :value="item.icon"
                                            >
                                            <el-icon class="manageNotesCategory-left">
                                                <component :is="item.icon"></component>
                                            </el-icon>
                                            {{ item.icon }}
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item>
                                        <div style="flex-grow: 1;"></div>
                                        <el-button v-if="isAdd" @click="add()" type="danger"  plain>
                                            {{ $t("common.add") }}
                                        </el-button>
                                        <el-button v-if="isEdit" @click="edit()" type="danger"  plain>
                                            {{ $t("common.edit") }}
                                        </el-button>
                                        <el-button v-if="isApply" @click="apply()" type="danger"  plain>
                                            {{ $t("common.apply") }}
                                        </el-button>
                                        <el-button v-if="isApply" @click="cancel()" type="info" plain>
                                            {{ $t("common.cancel") }}
                                        </el-button>
                                    </el-form-item>
                                    </el-form>
                                </el-card>
                            </div>
                        </el-affix>
                    </el-col>
                </el-row>
            </el-card>
        </div>
    </el-scrollbar>
</template>

<script>
import managenotescategory from "@/assets/js/manage/ManageNotesCategory.js";
export default managenotescategory;
</script>

<style scope>
@import "@/assets/css/manage/ManageIndex.css";
@import '@/assets/css/common.css';
@import '@/assets/css/notes/NotesAside.css';
@import '@/assets/css/manage/ManageNotesCategory.css';
</style>