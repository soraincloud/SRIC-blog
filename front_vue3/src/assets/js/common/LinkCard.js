import LinkCardGitHub from '@/components/common/LinkCards/LinkCardGitHub'
import LinkCardBilibili from '@/components/common/LinkCards/LinkCardBilibili'
import LinkCardWeibo from '@/components/common/LinkCards/LinkCardWeibo'
import LinkCardTencentqq from '@/components/common/LinkCards/LinkCardTencentqq'

export default
{
  name: 'LinkCard',
  components: { LinkCardGitHub,LinkCardBilibili,LinkCardTencentqq,LinkCardWeibo },
  data()
  {
    return{
      GithubSvg: require('@/assets/svg/github.svg'),
      BilibiliSvg: require('@/assets/svg/bilibili.svg'),
      TencentqqSvg: require('@/assets/svg/qq.svg'),
      WeiboSvg: require('@/assets/svg/weibo.svg')
    }
  }
}