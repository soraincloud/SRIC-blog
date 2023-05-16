<template>
    <span class="LinkCardGitHub-span-text-style">GitHub</span>
    <el-divider class="LinkCardGitHub-el-divider-style"></el-divider>
    <el-avatar :src="MarkGitHub" class="LinkCard-el-avatar-style" fit="scale-down"></el-avatar>
    <div class="LinkCard-name-text-style">@soraincloud</div>
    <el-divider class="LinkCardGitHub-el-divider-style"></el-divider>
    <div class="LinkCard-text-style">你可以在这里看到我的代码,虽然不一定好使,但是或许会有帮助</div>
    <el-divider class="LinkCardGitHub-el-divider-style"></el-divider>

    <div class="LinkCard-text-style">
        (ﾉ*･ω･)ﾉ
        <a href="https://github.com/soraincloud" target="blank">
        <el-button color="#6dc781" size="small" class="LinkCard-link-button-style">
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
    name: 'LinkCardGitHub',
    components: { Connection },
    data()
    {
        return{
            MarkGitHub: require('@/assets/images/logo/mark-6dc781.png')
        }
    }
}
</script>


<style>
.LinkCardGitHub-span-text-style
{
    font-weight: bold;
    color: #6dc781;
}

.LinkCardGitHub-el-divider-style
{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #6dc781;
    padding-top: 1px;
}

.LinkCard-el-avatar-style
{
    margin-left: 10px;
    margin-bottom: 5px;
}

.LinkCard-name-text-style
{
    font-size: 15px;
    font-weight: bold;
    color: #666666;
    margin-left: 5px;
}

.LinkCard-text-style
{
    font-size: 15px;
    font-weight: bold;
    color: #666666;
    margin-left: 5px;
}

.LinkCard-link-button-style
{
    color: #ffffff;
    margin-left: 5px;
}

.LinkCard-icon-style
{
    margin-left: 5px;
}

html.dark .LinkCard-name-text-style
{
    color: #ffffff;
}

html.dark .LinkCard-text-style
{
    color: #ffffff;
}
</style>