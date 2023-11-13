import { useDark } from '@vueuse/core'
import i18n from '@/language'
import { getAllNotesCategory } from '@/axios/api/notesApi'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'NotesAside',
    data()
    {
        return{
            active: '',
            category:
            [
                {
                    id: 0,
                    content: "全部",
                    icon: "Menu",
                },
                {
                    id: -1,
                    content: "未分类",
                    icon: "QuestionFilled",
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
            if(this.category[i].id == 0)
            {
                this.$emit('loadAllNotesFormAside')
            }
            else
            {
                this.categoryNeed = this.category[i].id
                this.$emit('loadNotesFromAside')
            }
        }
    },
    created()
    {
        var _this = this
        getAllNotesCategory().then(function(resp){
                for(let i = 0;i < resp.data.length;i++)
                {
                    _this.category.push(resp.data[i])
                }
        })
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.category[0].content = t('notes.all')
            this.category[1].content = t('notes.none')
        }
    },
}