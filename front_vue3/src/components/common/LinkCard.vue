<template>
  <el-tabs tab-position="left">
    <el-tab-pane>
      <template #label>
        <el-image :src="GithubSvg" class="LinkCard-el-tabs-svg-style"></el-image>
      </template>
      github
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <el-image :src="TwitterSvg" class="LinkCard-el-tabs-svg-style"></el-image>
      </template>
      twetter
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <el-image :src="BilibiliSvg" class="LinkCard-el-tabs-svg-style"></el-image>
      </template>
      bilibili
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <el-image :src="TencentqqSvg" class="LinkCard-el-tabs-svg-style"></el-image>
      </template>
      tencent-qq
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <el-image :src="WeiboSvg" class="LinkCard-el-tabs-svg-style"></el-image>
      </template>
      weibo
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default
{
  name: 'LinkCard',
  data()
  {
    return{
      GithubSvg: require('@/assets/svg/github.svg'),
      TwitterSvg: require('@/assets/svg/twitter.svg'),
      BilibiliSvg: require('@/assets/svg/bilibili.svg'),
      TencentqqSvg: require('@/assets/svg/qq.svg'),
      WeiboSvg: require('@/assets/svg/weibo.svg')
    }
  }
}
</script>

<style>
.el-tabs__item
{
  padding-left: 5px;
}

.LinkCard-el-tabs-svg-style
{
  height: 32px;
  width: 32px;
}
</style>