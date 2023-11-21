import { useDark } from '@vueuse/core'
import { getAllIndexHeadTitle } from '@/axios/api/homeApi'
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
            ],
            lang: localStorage.getItem('language'),
            indexHeadTitleData: [],
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
        loadText()
        {
            this.lang = localStorage.getItem('language')
            if(this.lang == 'zh')
            {
                this.catalogs[0].content = this.indexHeadTitleData[0].text
            }
            else if(this.lang == 'en')
            {
                this.catalogs[0].content = this.indexHeadTitleData[1].text
            }
            else if(this.lang == 'warma')
            {
                this.catalogs[0].content = this.indexHeadTitleData[2].text
            }
            this.catalogs[1].content = t('indexaside.used')
            this.catalogs[2].content = t('indexaside.about')
            this.catalogs[3].content = t('indexaside.time')
        },
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.loadText()
        }
    },
    created()
    {
        this.catalogs[1].content = t('indexaside.used')
        this.catalogs[2].content = t('indexaside.about')
        this.catalogs[3].content = t('indexaside.time')
        var _this = this
        getAllIndexHeadTitle().then(function(resp){
            _this.indexHeadTitleData = resp.data
            if(_this.lang == 'zh')
            {
                _this.catalogs[0].content = resp.data[0].text
            }
            else if(_this.lang == 'en')
            {
                _this.catalogs[0].content = resp.data[1].text
            }
            else if(_this.lang == 'warma')
            {
                _this.catalogs[0].content = resp.data[2].text
            }
        })
    },
}