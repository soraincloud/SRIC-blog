<template>
  <el-tabs tab-position="left">
    <el-tab-pane>
      <template #label>
        <el-image :src="GithubSvg" class="LinkCard-el-tabs-svg-style"></el-image>
      </template>
      <link-card-git-hub/>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <el-image :src="BilibiliSvg" class="LinkCard-el-tabs-svg-style"></el-image>
      </template>
      <link-card-bilibili/>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <el-image :src="WeiboSvg" class="LinkCard-el-tabs-svg-style"></el-image>
      </template>
      <link-card-weibo></link-card-weibo>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <el-image :src="TencentqqSvg" class="LinkCard-el-tabs-svg-style"></el-image>
      </template>
      <link-card-tencentqq/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import linkcard from "@/assets/js/common/LinkCard.js"
  export default linkcard
</script>

<style>
  @import '@/assets/css/common/LinkCard.css';
</style>