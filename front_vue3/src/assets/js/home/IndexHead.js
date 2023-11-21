import { useDark } from '@vueuse/core'
import { getAllIndexHead,getAllIndexHeadTitle } from '@/axios/api/homeApi'

const isDark = useDark()
export default
{
    name: 'IndexHead',
    data()
    {
        return{
            active: '',
            indexHeadTitle: '',
            indexHead: '',
            lang: localStorage.getItem('language'),
            indexHeadTitleData: [],
            indexHeadData: [],
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
                this.indexHeadTitle = this.indexHeadTitleData[0].text
                this.indexHead = this.indexHeadData[0].text
            }
            else if(this.lang == 'en')
            {
                this.indexHeadTitle = this.indexHeadTitleData[1].text
                this.indexHead = this.indexHeadData[1].text
            }
            else if(this.lang == 'warma')
            {
                this.indexHeadTitle = this.indexHeadTitleData[2].text
                this.indexHead = this.indexHeadData[2].text
            }
        },
    },
    created()
    {
        var _this = this;
        getAllIndexHeadTitle().then(function(resp){
            _this.indexHeadTitleData = resp.data
            if(_this.lang == 'zh')
            {
                _this.indexHeadTitle = resp.data[0].text
            }
            else if(_this.lang == 'en')
            {
                _this.indexHeadTitle = resp.data[1].text
            }
            else if(_this.lang == 'warma')
            {
                _this.indexHeadTitle = resp.data[2].text
            }
        })
        getAllIndexHead().then(function(resp){
            _this.indexHeadData = resp.data
            if(_this.lang == 'zh')
            {
                _this.indexHead = resp.data[0].text
            }
            else if(_this.lang == 'en')
            {
                _this.indexHead = resp.data[1].text
            }
            else if(_this.lang == 'warma')
            {
                _this.indexHead = resp.data[2].text
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