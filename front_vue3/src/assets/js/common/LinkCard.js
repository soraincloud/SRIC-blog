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