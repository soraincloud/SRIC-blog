import { getAllFiles,getFilesByText } from '@/axios/api/filesApi'
import i18n from '@/language'

const { t } = i18n.global
export default
{
    name: 'ManageFiles',
    data()
    {
        return {
            loading: true,
            bodyHeight: "height:" + (window.innerHeight - 80) + "px;",
            outDivHeight: 'height: ' + (window.innerHeight) + 'px;',
            scrollCardHeight: (window.innerHeight - 150),
            placeholderText: t('common.search'),
            files: [],
            search: '',
        }
    },
    methods:
    {
        getFiles()
        {
            var _this = this
            getAllFiles().then(function(resp){
                _this.files = resp.data
                _this.loading = false
            })
        },
        clickSearch()
        {
            var _this = this
            getFilesByText({ text: this.search }).then(function(resp){
                _this.files = resp.data
            })
        },
        clickRefresh()
        {
            this.loading = true
            this.search = ''
            this.getFiles()
        },
    },
    created()
    {
        this.getFiles()
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = "height:" + (window.innerHeight - 80) + "px;"
            this.outDivHeight = 'height: ' + (window.innerHeight) + 'px;'
            this.scrollCardHeight = (window.innerHeight - 150)
        }
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.placeholderText = t('common.search')
        }
    },
}