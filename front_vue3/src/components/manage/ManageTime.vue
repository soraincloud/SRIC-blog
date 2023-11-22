<template>
    <el-scrollbar :height="bodyHeight">
        <div class="ManageIndex-out-div">
            <el-card class="ManageIndex-el-card">
                <div @mouseover="mouseOver" @mouseleave="mouseLeave">
                    <el-card class="common-with-back-el-card-style" :style="active">
                        <h1 class="common-text-style">{{ $t("indexaside.time") }}</h1>
                        <el-divider class="common-el-divider-style" />
                        <el-timeline>
                            <el-timeline-item
                            v-for="(item, i) in timeline"
                            :key="i" :timestamp="item.timestmap"
                            :type="item.type" 
                            :color="item.color" 
                            :hollow="true" size="large"
                            class="IndexTime-timeline-item-style"
                            >
                                {{ item.content }}
                                <el-button class="manageTime-el-button" type="danger" size="small" plain @click="clickDelete(i)">
                                    {{ $t('common.delete') }}
                                </el-button>
                                <el-button class="manageTime-el-button" type="warning" size="small" plain @click="clickEdit(i)">
                                    {{ $t('common.edit') }}
                                </el-button>
                                <el-card class="manageTime-change-el-card" :style="timelineCard[i].height">
                                    <div id="manageTime-card-div-id">
                                        <el-form>
                                            <el-form-item>
                                                <template v-slot:label>
                                                    {{ $t('common.text') }}
                                                </template>
                                                <el-input maxlength="20" show-word-limit type="text" @blur="textInputBlur"></el-input>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
                    </el-card>
                </div>
            </el-card>
        </div>
    </el-scrollbar>
</template>

<script>
import managetime from "@/assets/js/manage/ManageTime.js";
export default managetime;
</script>

<style scope>
@import "@/assets/css/manage/ManageTime.css";
@import "@/assets/css/manage/ManageIndex.css";
@import "@/assets/css/common.css";
@import "@/assets/css/home/IndexTime.css";
</style>