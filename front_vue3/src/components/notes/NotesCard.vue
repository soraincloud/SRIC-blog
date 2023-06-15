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
            <div>
                <el-icon size="10px" class="NotesCard-el-icon-style"><Histogram/></el-icon>
                <span class="NotesCard-tag-text-style">访问量：{{item.visited}}</span>
            </div>
            <el-divider class="common-el-divider-style" />
            <p class="common-text-style">{{item.description}}</p>
        </el-card>
    </div>
</template>

<script>
import { useDark } from '@vueuse/core'
import { Histogram } from '@element-plus/icons-vue'

const isDark = useDark()
export default
{
    name:'NotesCard',
    components: { Histogram },
    data()
    {
        return{
            notes:[]
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
        loadNotes()
        {
            var _this = this
            this.$axios
            .get('/notesList')
            .then(resp => 
            {
                if (resp && resp.status === 200)
                {
                    _this.notes = resp.data
                }
            })
        }
    },
    mounted:function()
    {
        this.loadNotes()
    },
}
</script>

<style scoped>
    @import '@/assets/css/common.css';
    @import '@/assets/css/notes/NotesCard.css';
</style>