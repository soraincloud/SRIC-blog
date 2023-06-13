<template>
    <span class="LinkCardTwitter-span-text-style">Twitter</span>
    <el-divider class="LinkCardTwitter-el-divider-style"></el-divider>
    <el-avatar :src="MarkTwitter" class="LinkCard-el-avatar-style" fit="scale-down"></el-avatar>
    <div class="LinkCard-name-text-style">@so_ra_in_cloud</div>
    <el-divider class="LinkCardTwitter-el-divider-style"></el-divider>
    <div class="LinkCard-text-style">或许我的推特上会发点什么照片之类的 ? 可以看看喔,如果你确定的话 ...</div>
    <el-divider class="LinkCardTwitter-el-divider-style"></el-divider>

    <div class="LinkCard-text-style">
        (ﾉ*･ω･)ﾉ
        <a href="https://twitter.com/@so_ra_in_cloud" target="blank">
        <el-button color="#23ade5" size="small" class="LinkCard-link-button-style">
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
    name: 'LinkCardTwitter',
    components: { Connection },
    data()
    {
        return{
            MarkTwitter: require('@/assets/images/logo/mark-23ade5.png')
        }
    }
}
</script>


<style>
    @import '@/assets/css/common/LinkCardItem.css'
</style>