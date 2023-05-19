<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="Used-common-el-card-style" :style="active">
            <el-image :src="VueLogo"></el-image>
        </el-card>
    </div>
</template>

<script>
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'UsedCardVue',
    data()
    {
        return{
            active: '',
            VueLogo: require('@/assets/images/logo/logo-vue.png')
        }
    },
    methods:
    {
        mouseOver()
        {
            if(isDark.value == true)
            {
                this.active = 'background: rgba(255,255,255,0.8)'
            }
            else
            {
                this.active = 'background: rgba(0,0,0,0.8);'
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
.Used-common-el-card-style .el-card__body
{
    padding: 0;
    background: rgba(255,255,255,0);
}

.Used-common-el-card-style
{
    background: rgba(255,255,255,0);
    margin-left: 5px;
    margin-right: 5px;
}
</style>