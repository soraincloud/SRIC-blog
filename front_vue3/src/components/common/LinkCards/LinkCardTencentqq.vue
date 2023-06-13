<template>
    <span class="LinkCardTencentqq-span-text-style">Tencent-qq</span>
    <el-divider class="LinkCardTencentqq-el-divider-style"></el-divider>
    <el-avatar :src="MarkTencentqq" class="LinkCard-el-avatar-style" fit="scale-down"></el-avatar>
    <div class="LinkCard-name-text-style">@SRIC-offical</div>
    <el-divider class="LinkCardTencentqq-el-divider-style"></el-divider>
    <div class="LinkCard-text-style">这里是我的QQ,如果你想联系我的话,就快来加我的账号吧 ~ </div>
    <div class="LinkCard-text-style">ID : 3355905055</div>
    <el-divider class="LinkCardTencentqq-el-divider-style"></el-divider>

    <div class="LinkCard-text-style">
        (ﾉ*･ω･)ﾉ
        <el-button color="#d81e06" size="small" class="LinkCard-link-button-style" @click="copy">
            点我复制
            <el-icon class="LinkCard-icon-style" size="18px"><Edit/></el-icon>
        </el-button>
    </div>
</template>

<script>
import useClipboard from 'vue-clipboard3'
import { Edit } from '@element-plus/icons-vue'
export default
{
    name: 'LinkCardTencentqq',
    components: { Edit },
    setup()
    {
        const { toClipboard } = useClipboard();
        const copy = async () => 
        {
            try
            {
                await toClipboard('3355905055')
                message.success('复制了QQ号');
            }
            catch (e){}
        }
        return
        {
            copy
        }
    },
    data()
    {
        return{
            MarkTencentqq: require('@/assets/images/logo/mark-d81e06.png')
        }
    }
}
</script>


<style>
    @import '@/assets/css/common/LinkCardItem.css';
</style>