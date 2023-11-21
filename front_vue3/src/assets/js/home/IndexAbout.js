import { getAllIndexAbout,setIndexAbout } from '@/axios/api/homeApi'
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'IndexAbout',
    data()
    {
        return{
            active: '',
            indexAbout: '',
            lang: localStorage.getItem('language'),
            indexAboutData: [],
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
                this.active = 'background: rgba(255,255,255,0.85)'
            }
        },
        mouseLeave()
        {
            this.active = ''
        },
        loadText()
        {
            this.lang = localStorage.getItem('language')
            if(this.lang == 'zh')
            {
                this.indexAbout = this.indexAboutData[0].text
            }
            else if(this.lang == 'en')
            {
                this.indexAbout = this.indexAboutData[1].text
            }
            else if(this.lang == 'warma')
            {
                this.indexAbout = this.indexAboutData[2].text
            }
        },
    },
    created()
    {
        var _this = this
        getAllIndexAbout().then(function(resp){
            _this.indexAboutData = resp.data
            if(_this.lang == 'zh')
            {
                _this.indexAbout = resp.data[0].text
            }
            else if(_this.lang == 'en')
            {
                _this.indexAbout = resp.data[1].text
            }
            else if(_this.lang == 'warma')
            {
                _this.indexAbout = resp.data[2].text
            }
        })
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.loadText()
        }
    },
}