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