import { useDark } from '@vueuse/core'
import { Menu,QuestionFilled,Opportunity,Platform,Histogram } from '@element-plus/icons-vue'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'NotesAside',
    components: { Menu,QuestionFilled,Opportunity,Platform,Histogram },
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
                {
                    content: "前端",
                    icon: "Platform",
                },
                {
                    content: "后端",
                    icon: "Histogram",
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
                this.category[i].backgrounds = "background: #ff7f7f"
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
    },
    created()
    {
        this.category[0].content = t('notes.all')
        this.category[1].content = t('notes.none')
        this.category[2].content = t('notes.algorithm')
        this.category[3].content = t('notes.front')
        this.category[4].content = t('notes.back')
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.category[0].content = t('notes.all')
            this.category[1].content = t('notes.none')
            this.category[2].content = t('notes.algorithm')
            this.category[3].content = t('notes.front')
            this.category[4].content = t('notes.back')
        }
    },
}