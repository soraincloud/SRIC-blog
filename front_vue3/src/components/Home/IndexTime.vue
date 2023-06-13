<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="common-with-back-el-card-style" :style="active">
            <h1 class="common-text-style">最近活动</h1>
            <el-divider class="common-el-divider-style" />
            <el-timeline>
                <el-timeline-item
                v-for="(item,i) in timeline"
                :key="i"
                :timestamp="item.timestmap"
                :type="item.type"
                :color="item.color"
                hollow="true"
                size="large"
                class="IndexTime-timeline-item-style"
                >
                {{item.content}}
                </el-timeline-item>
            </el-timeline>
        </el-card>
    </div>
</template>

<script>
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'IndexHead',
    data()
    {
        return{
            active: '',
            timeline:[]
        }
    },
    mounted:function()
    {
        this.loadIndexTime()
    },
    methods:
    {
        mouseOver()
        {
            if(isDark.value == true)
            {
                this.active = 'background: rgba(0,0,0,0.85);'
            }
            else
            {
                this.active = 'background: rgba(255,255,255,0.85)'
            }
        },
        mouseLeave()
        {
            this.active = ''
        },
        loadIndexTime()
        {
            var _this = this
            this.$axios.get('/indexTimeList').then(resp => {
                if (resp && resp.status === 200)
                {
                    _this.timeline = resp.data
                }
            })
        }
    }
}
</script>

<style scoped>
    @import '@/assets/css/common.css';
    @import '@/assets/css/Home/IndexTime.css';
</style>