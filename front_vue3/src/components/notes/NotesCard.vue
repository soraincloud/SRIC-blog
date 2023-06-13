<template>
    <div>
        <el-card 
        v-for="(item,i) in notes" 
        :key="i" 
        class="common-with-back-el-card-style" 
        :style="[item.backgrounds]"
        @mouseover="over(i)"
        @mouseleave="leave(i)"
        >
            <h1 class="common-text-style">{{item.title}}</h1>
            <el-divider class="common-el-divider-style" />
            <p class="common-text-style">{{item.description}}</p>
        </el-card>
    </div>
</template>

<script>
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name:'NotesCard',
    data()
    {
        return{
            notes:
            [
                {
                    id: 1,
                    title: "some text",
                    description: "some descrition",
                },
                {
                    id: 2,
                    title: "some text",
                    description: "some descrition",
                }
            ]
        }
    },
    methods:
    {
        over(i)
        {
            if(isDark.value == true)
            {
                this.notes[i].backgrounds = "background: rgba(0,0,0,0.85);"
            }
            else
            {
                this.notes[i].backgrounds = "background: rgba(255,255,255,0.85);"
            }
        },
        leave(i)
        {
            this.notes[i].backgrounds = ""
        },
    }
}
</script>

<style scoped>
    @import '@/assets/css/common.css';
</style>