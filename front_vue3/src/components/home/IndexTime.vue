<template>
    <div
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
    >
        <el-card class="common-with-back-el-card-style" :style="active">
            <h1 class="common-text-style">{{ $t("indexaside.time") }}</h1>
            <el-divider class="common-el-divider-style" />
            <el-timeline>
                <el-timeline-item
                    v-for="(item, i) in timeline"
                    :key="i"
                    :timestamp="item.timestamp"
                    :type="item.type"
                    :color="item.color"
                    :hollow="true"
                    size="large"
                    class="IndexTime-timeline-item-style"
                >
                    {{ item.content }}
                </el-timeline-item>
            </el-timeline>
        </el-card>
    </div>
</template>

<script>
import indextime from "@/assets/js/home/IndexTime.js";
export default indextime;
</script>

<style scoped>
@import "@/assets/css/common.css";
@import "@/assets/css/home/IndexTime.css";
</style>