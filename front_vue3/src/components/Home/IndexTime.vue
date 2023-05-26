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
            timeline:
            [
                {
                    content:'创建这个博客',
                    timestmap:'2023.5.24',
                    type:'danger',
                    color:'white'
                },
                {
                    content:'创建这个博客',
                    timestmap:'2023.5.24',
                    type:'danger',
                    color:'white'
                }
            ]
        }
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
        }
    }
}
</script>

<style scoped>
.IndexTime-timeline-item-style
{
    font-weight: bold;
}
</style>