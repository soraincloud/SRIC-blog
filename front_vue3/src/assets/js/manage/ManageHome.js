import { getAllIndexHeadTitle,getAllIndexHead,setIndexHead,setIndexHeadTitle,getAllIndexAbout,setIndexAbout } from "@/axios/api/homeApi"
import i18n from '@/language'

const { t } = i18n.global
export default
{
    name: 'ManageHome',
    data()
    {
        return{
            card0: '',
            card1: '',
            bodyHeight: (window.innerHeight - 60) + 'px',
            indexHeadTitle: '',
            indexHead: '',
            indexHeadTitleData: [],
            indexHeadData: [],
            headActiveTabs: 'zh',
            headLangNow: 'zh',
            headSubmit: false,
            headSubmitText: '',
            indexAboutTitle: '',
            indexAbout: '',
            indexAboutData: [],
            aboutActiveTabs: 'zh',
            aboutLangNow: 'zh',
        }
    },
    methods:
    {
        mouseOver(num)
        {
            if(num == 0)
            {   
                this.card0 = "background-color: rgba(255,143,143,0.5)"
            }
            else if(num == 1)
            {
                this.card1 = "background-color: rgba(255,143,143,0.5)"
            }
        },
        mouseLeave(num)
        {
            if(num == 0)
            {   
                this.card0 = ''
            }
            else if(num == 1)
            {
                this.card1 = ''
            }
        },
        headTabChange(tab)
        {
            if(tab == 'zh')
            {
                this.headLangNow = 'zh'
                this.indexHeadTitle = this.indexHeadTitleData[0].text
                this.indexHead = this.indexHeadData[0].text
            }
            else if(tab == 'en')
            {
                this.headLangNow = 'en'
                this.indexHeadTitle = this.indexHeadTitleData[1].text
                this.indexHead = this.indexHeadData[1].text
            }
            else if(tab == 'warma')
            {
                this.headLangNow = 'warma'
                this.indexHeadTitle = this.indexHeadTitleData[2].text
                this.indexHead = this.indexHeadData[2].text
            }
        },
        headTitleBlur()
        {
            if(this.headLangNow == 'zh')
            {
                this.indexHeadTitleData[0].text = this.indexHeadTitle
            }
            else if(this.headLangNow == 'en')
            {
                this.indexHeadTitleData[1].text = this.indexHeadTitle
            }else if(this.headLangNow == 'warma')
            {
                this.indexHeadTitleData[2].text = this.indexHeadTitle
            }
        },
        headBlur()
        {
            if(this.headLangNow == 'zh')
            {
                this.indexHeadData[0].text = this.indexHead
            }
            else if(this.headLangNow == 'en')
            {
                this.indexHeadData[1].text = this.indexHead
            }else if(this.headLangNow == 'warma')
            {
                this.indexHeadData[2].text = this.indexHead
            }
        },
        clickHeadSubmit()
        {
            this.headSubmit = true
            this.headSubmitText = t('common.applyText')
        },
        clickHeadApply()
        {
            setIndexHeadTitle(this.indexHeadTitleData).then()
            setIndexHead(this.indexHeadData).then(
                this.$message.success({message: t('common.applySuccess'),}),
                this.headSubmit = false,
                this.headSubmitText = t('common.submitText'),
                )
        },
        clickHeadCancel()
        {
            this.headSubmit = false
            this.headSubmitText = t('common.submitText')
        },
        aboutTabChange(tab)
        {
            if(tab == 'zh')
            {
                this.aboutLangNow = 'zh'
                this.indexAbout = this.indexAboutData[0].text
                this.indexAboutTitle = "关于"
            }
            else if(tab == 'en')
            {
                this.aboutLangNow = 'en'
                this.indexAbout = this.indexAboutData[1].text
                this.indexAboutTitle = "about"
            }
            else if(tab == 'warma')
            {
                this.aboutLangNow = 'warma'
                this.indexAbout = this.indexAboutData[2].text
                this.indexAboutTitle = "有关东西"
            }
        }
    },
    created()
    {
        var _this = this
        getAllIndexHeadTitle().then(function(resp){
            _this.indexHeadTitleData = resp.data
            _this.indexHeadTitle = resp.data[0].text
        })
        getAllIndexHead().then(function(resp){
            _this.indexHeadData = resp.data
            _this.indexHead = resp.data[0].text
        })
        this.headSubmitText = t('common.submitText')
        getAllIndexAbout().then(function(resp){
            _this.indexAboutData = resp.data
            _this.indexAbout = resp.data[0].text
        })
        this.indexAboutTitle = "关于"
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = (window.innerHeight - 70) + 'px'
        }
    },
}