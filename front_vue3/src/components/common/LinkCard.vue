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
        <el-image :src="TwitterSvg" class="LinkCard-el-tabs-svg-style"></el-image>
      </template>
      <link-card-twitter/>
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
import LinkCardGitHub from '@/components/common/LinkCards/LinkCardGitHub'
import LinkCardTwitter from '@/components/common/LinkCards/LinkCardTwitter'
import LinkCardBilibili from '@/components/common/LinkCards/LinkCardBilibili'
import LinkCardWeibo from '@/components/common/LinkCards/LinkCardWeibo'
import LinkCardTencentqq from '@/components/common/LinkCards/LinkCardTencentqq'

export default
{
  name: 'LinkCard',
  components: { LinkCardGitHub,LinkCardTwitter,LinkCardBilibili,LinkCardTencentqq,LinkCardWeibo },
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