<!--
- 注意覆盖组件库默认样式时 style 不能使用 scoped
-->

<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="AsideMessage-el-card-style" :style="active">
            <div class="AsideMessage-message-div-style">
                <el-avatar :src="SRICAvater" class="AsideMessage-el-avater-style" fit="scale-down"></el-avatar>
                <div class="AsideMessage-name-div-style">
                    <span>soraincloud</span>
                    <el-tag checked size="small" class="AsideMessage-el-tag-style" type="danger" effect="dark">neko</el-tag>
                </div>
                <el-divider class="AsideMessage-el-divider-style">
                    <el-icon class="AsideMessage-divider-icon-style" size="20px"><StarFilled/></el-icon>
                </el-divider>
            </div>
            <div>
                <link-card></link-card>
            </div>
        </el-card>
    </div>
</template>

<script>
import LinkCard from '@/components/common/LinkCard'
import { StarFilled } from '@element-plus/icons-vue'
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'AsideMessage',
    components: { StarFilled,LinkCard },
    data()
    {
        return{
            SRICAvater: require('@/assets/images/logo/SRIC-Avatar.jpg'),
            active: ''
        }
    },
    methods:
    {
        mouseOver()
        {
            if(isDark.value == true)
            {
                this.active = 'background: rgba(0,0,0,0.85)'
            }
            else
            {
                this.active = 'background: rgba(255,255,255,0.85)'
            }
        },
        mouseLeave()
        {
            this.active = ''
        }
    }
}

</script>

<style>
.AsideMessage-el-card-style
{
    width: 95%;
    height: 100%;
    margin-top: 10px;
    margin-left: 10px;
    background: rgba(255,255,255,0.64);
}

.AsideMessage-message-div-style
{
    text-align: center;
    margin-top: 32px;
    color: #666666;
}

.AsideMessage-el-avater-style
{
    width: 100px;
    height: 100px;
}

.AsideMessage-name-div-style
{
    margin-top: 10px;
    margin-bottom: 32px;
}

.AsideMessage-el-tag-style
{
    margin-left: 10px;
}

.AsideMessage-el-divider-style
{
    background-color: #aaaaaa;
    padding-top: 1px;
}

.AsideMessage-divider-icon-style
{
    color: #aaaaaa;
    margin-top: 2px;
}

.el-divider__text
{
    background-color: rgba(255,255,255,0);
}

html.dark .AsideMessage-el-card-style
{
    background: rgba(0,0,0,0.64);
}

html.dark .AsideMessage-message-div-style
{
    color: #ffffff;
}

html.dark .AsideMessage-el-divider-style
{
    background-color: #ffffff;
}

html.dark .AsideMessage-divider-icon-style
{
    color: #ffffff;
}
</style>