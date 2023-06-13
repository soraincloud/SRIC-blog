<template>
    <span class="LinkCardWeibo-span-text-style">Weibo</span>
    <el-divider class="LinkCardWeibo-el-divider-style"></el-divider>
    <el-avatar :src="MarkWeibo" class="LinkCard-el-avatar-style" fit="scale-down"></el-avatar>
    <div class="LinkCard-name-text-style">@so_ra_in_cloud</div>
    <el-divider class="LinkCardWeibo-el-divider-style"></el-divider>
    <div class="LinkCard-text-style">这里是我的微博,没准上面会有一些日常什么的,可以来瞅瞅 ~</div>
    <el-divider class="LinkCardWeibo-el-divider-style"></el-divider>

    <div class="LinkCard-text-style">
        (ﾉ*･ω･)ﾉ
        <a href="https://weibo.com/u/7836024763" target="blank">
        <el-button color="#fdf66d" size="small" class="LinkCard-link-button-style">
            传送门
            <el-icon class="LinkCard-icon-style" size="18px"><Connection/></el-icon>
        </el-button>
        </a>
    </div>
</template>

<script>
import { Connection } from '@element-plus/icons-vue'
export default
{
    name: 'LinkCardWeibo',
    components: { Connection },
    data()
    {
        return{
            MarkWeibo: require('@/assets/images/logo/mark-fdf66d.png')
        }
    }
}
</script>


<style>
    @import '@/assets/css/common/LinkCardItem.css'
</style>