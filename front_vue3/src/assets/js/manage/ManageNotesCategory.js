import { getAllNotesCategory } from '@/axios/api/notesApi'
import { useDark } from '@vueuse/core'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'ManageNotesCategory',
    data()
    {
        return{
            loading: false,
            bodyHeight: (window.innerHeight - 60) + 'px',
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
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = (window.innerHeight - 70) + 'px'
        }
    },
    methods:
    {
        mouseOver()
        {
            if(isDark.value == true)
            {
                this.active = 'background: rgba(0,0,0,0);'
            }
            else
            {
                this.active = 'background: rgba(255,255,255,0);'
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