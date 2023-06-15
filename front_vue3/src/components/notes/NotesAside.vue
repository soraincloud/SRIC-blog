<template>
    <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        <el-card class="NotesAside-el-card-style" :style="active">
            <h1 class="common-text-style" style="margin-top: 64px">分类</h1>
            <el-divider class="common-el-divider-style" />
            <el-card
            v-for="(item,i) in category"
            :key="i"
            shadow="never"
            class="NotesAside-item-card-style"
            :style="item.backgrounds"
            @mouseover="over(i)"
            @mouseleave="leave(i)"
            @click="choose(i)"
            >
            <el-icon size="20px" style="float:right">
                <component :is="item.icon"></component>
            </el-icon>
            {{item.content}}
            </el-card>
        </el-card>
    </div>
</template>

<script>
import { useDark } from '@vueuse/core'
import { Menu,QuestionFilled,Opportunity } from '@element-plus/icons-vue'

const isDark = useDark()
export default
{
    name: 'NotesAside',
    components: { Menu,QuestionFilled,Opportunity },
    data()
    {
        return{
            active: '',
            category:
            [
                {
                    content: "全部",
                    icon: "Menu",
                },
                {
                    content: "未分类",
                    icon: "QuestionFilled",
                },
                {
                    content: "算法",
                    icon: "Opportunity",
                },
            ],
            categoryNeed: ''
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
                this.active = 'background: rgba(255,255,255,0.85);'
            }
        },
        mouseLeave()
        {
            this.active = ''
        },
        over(i)
        {
            if(isDark.value == true)
            {
                this.category[i].backgrounds = "background: #ffcccc"
            }
            else
            {
                this.category[i].backgrounds = "background: #ffcccc"
            }
        },
        leave(i)
        {
            this.category[i].backgrounds = ''
        },
        choose(i)
        {
            if(i == 0)
            {
                this.$emit('loadAllNotesFormAside')
            }
            else
            {
                this.categoryNeed = i
                this.$emit('loadNotesFromAside')
            }
        }
    }
}
</script>

<style>
    @import '@/assets/css/common.css';
    @import '@/assets/css/notes/NotesAside.css';
</style>