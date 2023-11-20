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
                this.indexAbout = this.$store.getters.getIndexAboutZh
            }
            else if(this.lang == 'en')
            {
                this.indexAbout = this.$store.getters.getIndexAboutEn
            }
            else if(this.lang == 'warma')
            {
                this.indexAbout = this.$store.getters.getIndexAboutWarma
            }
        },
    },
    created()
    {
        var _this = this
        getAllIndexAbout().then(function(resp){
            _this.$store.commit('setIndexAboutZh',resp.data[0].text)
            _this.$store.commit('setIndexAboutEn',resp.data[1].text)
            _this.$store.commit('setIndexAboutWarma',resp.data[2].text)
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