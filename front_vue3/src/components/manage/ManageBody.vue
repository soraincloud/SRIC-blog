<template>
    <body id="ManageBody-body-id">
        <div id="echarts-background-text"></div>
        <manage-bar />
        <manage-menu />
        <div>
        <router-view />
        </div>

    </body>
</template>

<script>
import managebody from "@/assets/js/manage/ManageBody.js";
export default managebody;
</script>

<style>
@import "@/assets/css/manage/ManageBody.css";
</style>