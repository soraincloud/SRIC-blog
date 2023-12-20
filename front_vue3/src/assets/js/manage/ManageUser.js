import { getAllUserData,getUserListByName } from '@/axios/api/userApi'
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
            user: [],
            search: '',
        }
    },
    methods:
    {
        getUserList()
        {
            var _this = this
            getAllUserData().then(function(resp){
                _this.user = resp.data
                _this.loading = false
            })
        },
        clickSearch()
        {
            var _this = this
            getUserListByName({ username: this.search }).then(function(resp){
                _this.user = resp.data
            })
        },
        clickRefresh()
        {
            this.loading = true
            this.search = ''
            this.getUserList()
        },
    },
    created()
    {
        this.getUserList()
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