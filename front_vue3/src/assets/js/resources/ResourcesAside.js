import { useDark } from '@vueuse/core'
import { Menu } from '@element-plus/icons-vue'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'ResourcesAside',
    components: { Menu },
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
                    icon: "Menu",
                },
                {
                    content: "类2",
                    icon: "Menu",
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
                this.$emit('loadAllResourcesFormAside')
            }
            else
            {
                this.categoryNeed = i
                this.$emit('loadResourcesFromAside')
            }
        }
    },
    created()
    {
        this.category[0].content = t('notes.all')
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.category[0].content = t('notes.all')
        }
    },
}