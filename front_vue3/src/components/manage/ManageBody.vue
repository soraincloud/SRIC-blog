<template>
    <body id="ManageBody-body-id">
        <div id="echarts-background-text"></div>
        <manage-bar />
        <router-view />
    </body>
</template>

<script>
import managebody from "@/assets/js/manage/ManageBody.js";
export default managebody;
</script>

<style>
@import "@/assets/css/manage/ManageBody.css";
</style>