import { getAllIndexHeadTitle,getAllIndexHead,setIndexHead,setIndexHeadTitle } from "@/axios/api/homeApi"
import i18n from '@/language'

const { t } = i18n.global
export default
{
    name: 'ManageHome',
    data()
    {
        return{
            card0: '',
            indexHeadTitle: '',
            indexHead: '',
            indexHeadTitleData: [],
            indexHeadData: [],
            headActiveTabs: 'zh',
            langNow: 'zh',
            headSubmit: false,
            headSubmitText: '',
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
        },
        mouseLeave(num)
        {
            if(num == 0)
            {   
                this.card0 = ''
            }
        },
        headTabChange(tab)
        {
            if(tab == 'zh')
            {
                this.langNow = 'zh'
                this.indexHeadTitle = this.indexHeadTitleData[0].text
                this.indexHead = this.indexHeadData[0].text
            }
            else if(tab == 'en')
            {
                this.langNow = 'en'
                this.indexHeadTitle = this.indexHeadTitleData[1].text
                this.indexHead = this.indexHeadData[1].text
            }
            else if(tab == 'warma')
            {
                this.langNow = 'warma'
                this.indexHeadTitle = this.indexHeadTitleData[2].text
                this.indexHead = this.indexHeadData[2].text
            }
        },
        headTitleBlur()
        {
            if(this.langNow == 'zh')
            {
                this.indexHeadTitleData[0].text = this.indexHeadTitle
            }
            else if(this.langNow == 'en')
            {
                this.indexHeadTitleData[1].text = this.indexHeadTitle
            }else if(this.langNow == 'warma')
            {
                this.indexHeadTitleData[2].text = this.indexHeadTitle
            }
        },
        headBlur()
        {
            if(this.langNow == 'zh')
            {
                this.indexHeadData[0].text = this.indexHead
            }
            else if(this.langNow == 'en')
            {
                this.indexHeadData[1].text = this.indexHead
            }else if(this.langNow == 'warma')
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
    }
}