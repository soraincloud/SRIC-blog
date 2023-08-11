import { useDark } from '@vueuse/core'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'IndexAside',
    data()
    {
        return{
            active: '',
            catalogs:
            [
                {
                    content: "SRIC 's BLOG",
                    borders: 'border-color: rgba(255,255,255,0);',
                    backgrounds: '',
                },
                {
                    content: "技术采用",
                    borders: 'border-color: rgba(255,255,255,0);',
                    backgrounds: '',

                },
                {
                    content: "关于",
                    borders: 'border-color: rgba(255,255,255,0);',
                    backgrounds: '',

                },
                {
                    content: "近期活动",
                    borders: 'border-color: rgba(255,255,255,0);',
                    backgrounds: '',
                },
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
                this.catalogs[i].borders = "border-color:white;"
            }
            else
            {
                this.catalogs[i].borders = "border-color:black;"
            }
        },
        leave(i)
        {
            this.catalogs[i].borders = 'border-color: rgba(255,255,255,0);'
        },
        jump(i)
        {
            this.changeBackground(i)
            window.location.href = "#appindex-card-" + i
        },
        changeBackground(i)
        {
            for(var j = 0;j < this.catalogs.length;j++)
            {
                this.catalogs[j].backgrounds = ''
            }
            this.catalogs[i].backgrounds = 'background: rgba(252,204,204,0.64);'
        },
    },
    created()
    {
        this.catalogs[1].content = t('indexaside.used')
        this.catalogs[2].content = t('indexaside.about')
        this.catalogs[3].content = t('indexaside.time')
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.catalogs[1].content = t('indexaside.used')
            this.catalogs[2].content = t('indexaside.about')
            this.catalogs[3].content = t('indexaside.time')
        }
    },
}