import { getAllNotesCategory } from '@/axios/api/notesApi'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
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
            active0: '',
            active1: '',
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
            textLabel: t('common.text'),
            iconLabel: t('common.icon'),
            input:
            {
                id: '',
                content: '',
                icon: '',
            },
            icons: [],
            selectPlaceholderText: t('common.select'),
            isAdd: false,
            isEdit:false,
            isApply: false,
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
        mouseOver(i)
        {
            if(isDark.value == true)
            {
                if(i == 0)
                {
                    this.active0 = 'background: rgba(0,0,0,0);'
                }
                else if(i == 1)
                {
                    this.active1 = 'background: rgba(0,0,0,0);'
                }
            }
            else
            {
                if(i == 0)
                {
                    this.active0 = 'background: rgba(255,255,255,0);'
                }
                else if(i == 1)
                {
                    this.active1 = 'background: rgba(255,255,255,0);'
                }
            }
        },
        mouseLeave(i)
        {
            if(i == 0)
            {
                this.active0 = ''
            }
            else if(i == 1)
            {
                this.active1 = ''
            }
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
            if(i == 0 || i == 1)
            {
                this.$message.error({message: t('message.notDefaultChange'),})
                return
            }
            this.input.id = this.category[i].id
            this.input.content = this.category[i].content
            this.input.icon = this.category[i].icon
            this.isEdit = true
        },
        add()
        {

        },
        edit()
        {
            this.isEdit = false
            this.isApply = true
        },
        apply()
        {

        },
        cancel()
        {
            this.isApply = false
            this.isEdit = true
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
        for (const [key] of Object.entries(ElementPlusIconsVue)) 
        {
            this.icons.push({
                icon: key,
            })
        }
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.category[0].content = t('notes.all')
            this.category[1].content = t('notes.none')
            this.textLabel = t('common.text')
            this.iconLabel = t('common.icon')
            this.selectPlaceholderText = t('common.select')
        }
    },
}