<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="Used-common-el-card-style" :style="active">
            <el-image :src="ElementLogo"></el-image>
        </el-card>
    </div>
</template>

<script>
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'UsedCardElement',
    data()
    {
        return{
            active: '',
            ElementLogo: require('@/assets/images/logo/logo-element.png')
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