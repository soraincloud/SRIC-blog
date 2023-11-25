<template>
    <el-scrollbar :height="bodyHeight" v-loading="loading" element-loading-text="Loading . . .">
        <div class="ManageIndex-out-div">
            <el-card class="ManageIndex-el-card" style="padding-top:0px;">
                <el-affix :offset="75">
                    <el-row>
                        <el-col :span="1"></el-col>
                        <el-col :span="11">
                            <el-input
                            v-model="search"
                            :placeholder="placeholderText"
                            class="manageTime-input-with-select"
                            >
                            <template #prepend>
                                <el-select v-model="select" :placeholder="selectPlaceholderText" style="width: 115px">
                                    <el-option :label="labelText" value="0" />
                                    <el-option :label="labelTime" value="1" />
                                    <el-option :label="labelYears" value="2" />
                                </el-select>
                            </template>
                            <template #append>
                                <el-button type="danger" icon="Search" class="manageTime-button-icon" @click="clickSearch()"/>
                            </template>
                            </el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-button type="danger" style="margin-left: 10px;" plain>
                                <el-icon>
                                    <CirclePlusFilled />
                                </el-icon>
                            </el-button>
                            <el-button type="success" style="margin-left: 10px;" plain>
                                <el-icon>
                                    <Refresh />
                                </el-icon>
                            </el-button>
                        </el-col>

                    </el-row>
                </el-affix>
                <div @mouseover="mouseOver" @mouseleave="mouseLeave">
                    <el-card class="common-with-back-el-card-style" :style="[active,margin]">
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
                                <el-card class="manageTime-change-el-card" :style="timelineCard[i].height">
                                    <div id="manageTime-card-div-id">
                                        <el-form>
                                            <el-form-item>
                                                <template v-slot:label>
                                                    {{ $t('common.text') }}
                                                </template>
                                                <el-input maxlength="50" show-word-limit type="text" v-model="item.content"></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <template v-slot:label>
                                                    {{ $t('common.time') }}
                                                </template>
                                                <el-date-picker v-model="item.timestmap" type="date" value-format="YYYY-MM-DD"></el-date-picker>
                                            </el-form-item>
                                            <el-form-item>
                                                <template v-slot:label>
                                                    {{ $t('common.color') }}
                                                </template>
                                                <el-select v-model="item.type" class="manageTime-el-select">
                                                    <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                                <span class="manageTime-span-text">{{ $t('indexTime.color') }}</span>
                                                <el-color-picker v-model="item.color"></el-color-picker>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button v-if="timelineCard[i].submit == false" @click="clickSubmit(i)" type="danger"
                                                    class="manageTime-submit-button" plain>
                                                    {{ $t("common.submit") }}
                                                </el-button>
                                                <el-button v-if="timelineCard[i].submit == true" @click="clickApply(i)" type="danger"
                                                    class="manageTime-submit-button" plain>
                                                    {{ $t("common.apply") }}
                                                </el-button>
                                                <el-button v-if="timelineCard[i].submit == true" @click="clickCancel(i)" type="info"
                                                    class="manageTime-submit-button" plain>
                                                    {{ $t("common.cancel") }}
                                                </el-button>
                                                <span class="manageTime-submit-text">
                                                    {{ $t("common.submitText") }}
                                                </span>
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

<style>
@import "@/assets/css/manage/ManageTime.css";
@import "@/assets/css/manage/ManageIndex.css";
@import "@/assets/css/common.css";
@import "@/assets/css/home/IndexTime.css";
</style>