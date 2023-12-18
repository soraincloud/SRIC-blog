<template>
<el-scrollbar>
    <div class="ManageIndex-out-div" :style="outDivHeight">
        <el-card class="ManageNotes-el-card" :style="[bodyHeight,showLeft]">
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
                        <el-button class="manageTime-el-button" type="warning" size="small" plain @click="clickUpdate(i)">
                            {{ $t('common.edit') }}
                        </el-button>
                        <p class="common-text-style">{{ item.description }}</p>
                    </el-card>
                    </el-scrollbar>
                </el-col>
            </el-row>
        </el-card>

        <el-card class="ManageNotes-el-card" :style="[bodyHeight,updateLeft]">
            <el-scrollbar :height="updateBodyHeight">
            <el-card
                class="common-with-back-el-card-style"
                :style="[inputBackgrounds]"
                @mouseover="updateCardOver()"
                @mouseleave="updateCardLeave()"
            >
                <h1 class="common-text-style">{{ input.title }}</h1>
                <div>
                    <el-icon size="10px" class="NotesCard-el-icon-style"><Histogram/></el-icon>
                    <span class="NotesCard-tag-text-style">
                        {{ $t("notes.visit") }} {{ input.visited }}
                    </span>
                    <el-icon size="10px" class="NotesCard-el-icon-style"><UserFilled/></el-icon>
                    <span class="NotesCard-tag-text-style">
                        {{ $t("notes.created") }} {{ input.username }}
                    </span>
                    <el-icon size="10px" class="NotesCard-el-icon-style"><List/></el-icon>
                    <span class="NotesCard-tag-text-style">
                        {{ $t("notes.date") }} {{ input.date }}
                    </span>
                </div>
                <el-divider class="common-el-divider-style"/>
                <p class="common-text-style">{{ input.description }}</p>
            </el-card>
            <div class="manageNotes-update-form">
                <el-row>
                    <el-col :span="4">
                        <h1 class="manageNotes-form-h1-text">{{ updateText }}</h1>
                        <div class="manageNotes-el-button-div">
                            <el-button class="manageNotes-el-button" type="info" plain @click="clickCancelUpdate()">
                                {{ $t('common.cancel') }}
                            </el-button>
                            <el-button class="manageNotes-el-button" type="warning" plain @click="clickEditNote()">
                                {{ $t('notes.edit') }}
                            </el-button>
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <el-card :style="formBackground" @mouseover="formOver()" @mouseleave="formLeave()">
                            <el-form
                            label-position="right"
                            :model="input"
                            :rules="rules"
                            ref="form"
                            >
                                <el-form-item :label="label.title" prop="title">
                                    <el-input
                                    v-model="input.title"
                                    type="text"
                                    maxlength="20"
                                    show-word-limit
                                    clearable
                                    />
                                </el-form-item>
                                <el-form-item :label="label.description" prop="description">
                                    <el-input
                                    v-model="input.description"
                                    type="textarea"
                                    maxlength="100"
                                    :autosize="{ minRows: 2 }"
                                    show-word-limit
                                    clearable
                                    />
                                </el-form-item>
                                <el-form-item :label="label.category" prop="category">
                                    <el-select
                                    v-model="input.category"
                                    clearable
                                    >
                                        <el-option
                                        v-for="(item,i) in category"
                                        :key="i"
                                        :label="item.content"
                                        :value="item.id"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item :label="label.visited" prop="visited">
                                    <el-input
                                    v-model="input.visited"
                                    type="text"
                                    clearable
                                    >
                                    </el-input>
                                </el-form-item>
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item :label="label.username" prop="username">
                                            <el-select
                                            v-model="input.username"
                                            clearable
                                            >
                                                <el-option
                                                v-for="(item,i) in user"
                                                :key="i"
                                                :label="item"
                                                :value="item"
                                                >
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item :label="label.date" prop="date">
                                            <el-date-picker v-model="input.date" type="date" value-format="YYYY-MM-DD"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-form-item :label="label.md" prop="md">
                                    <el-upload
                                    v-model:file-list="fileList"
                                    action
                                    :http-request="uploadFile"
                                    :limit="1"
                                    :on-remove="removeFile"
                                    :on-exceed="handleExceed"
                                    :before-upload="beforeUpload"
                                    accept=".md"
                                    class="manageNotes-el-upload"
                                    >
                                        <el-button type="success" size="small" class="manageTime-submit-button" plain>
                                            <el-icon class="SafetyPage-back-icon-style"><UploadFilled /></el-icon>
                                            {{ $t("common.upload") }}
                                        </el-button>
                                    </el-upload>
                                </el-form-item>
                                <el-form-item>
                                    <el-button v-if="isSubmit == false" @click="clickSubmit()" type="danger" class="manageTime-submit-button" plain>
                                        {{ $t("common.submit") }}
                                    </el-button>
                                    <el-button v-if="isSubmit == true" @click="clickApply()" type="danger" class="manageTime-submit-button" plain>
                                        {{ $t("common.apply") }}
                                    </el-button>
                                    <el-button v-if="isSubmit == true" @click="clickCancel()" type="info" class="manageTime-submit-button" plain>
                                        {{ $t("common.cancel") }}
                                    </el-button>
                                    <span v-if="isSubmit == true" class="manageTime-submit-text">
                                        {{ $t("common.applyText") }}
                                    </span>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-scrollbar>
        </el-card>

        <el-card class="ManageNotes-el-card" :style="[bodyHeight,editLeft]">
            <el-row>
                <el-col :span="12">
                    <div style="margin-bottom: 10px;">
                        <el-button @click="clickBack()" type="warning" class="manageTime-submit-button" plain>
                            <el-icon class="SafetyPage-back-icon-style"><ArrowLeftBold /></el-icon>
                            {{ $t("common.back") }}
                        </el-button>
                        <el-button v-if="isEditSubmit == false" @click="clickEditSubmit()" type="danger" class="manageTime-submit-button" plain>
                            {{ $t("common.submit") }}
                        </el-button>
                        <el-button v-if="isEditSubmit == true" @click="clickEditApply()" type="danger" class="manageTime-submit-button" plain>
                            {{ $t("common.apply") }}
                        </el-button>
                        <el-button v-if="isEditSubmit == true" @click="clickEditCancel()" type="info" class="manageTime-submit-button" plain>
                            {{ $t("common.cancel") }}
                        </el-button>
                        <span v-if="isEditSubmit == true" class="manageTime-submit-text" style="margin-top: 5px;">
                            {{ $t("common.applyText") }}
                        </span>
                    </div>
                    <el-scrollbar :height="scrollCardHeight">
                        <el-card class="common-with-back-el-card-style" style="margin-right: 10px;">
                            <el-input
                            v-model="markdownText"
                            type="textarea"
                            maxlength="50000"
                            :autosize="{ minRows: 2 }"
                            show-word-limit
                            clearable
                            style="margin-bottom: 10px;"
                            />
                        </el-card>
                </el-scrollbar>
                </el-col>
                <el-col :span="12">
                    <el-scrollbar :height="updateBodyHeight">
                        <el-card class="common-with-back-el-card-style">
                            <v-md-editor v-model="markdownText" mode="preview"></v-md-editor>
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
@import "@/assets/css/manage/ManageNotes.css";
@import "@/assets/css/manage/ManageIndex.css";
@import '@/assets/css/common.css';
@import '@/assets/css/notes/NotesAside.css';
@import "@/assets/css/notes/NotesCard.css";
@import "@/assets/css/manage/ManageTime.css";
@import "@/assets/css/common/NavMenu.css";
@import "@/assets/css/notes/NotesShow.css";
@import "@/assets/css/personal/SafetyPage.css";
</style>