import { getAllUserData,getUserListByName,changeStatus } from '@/axios/api/userApi'
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
            scrollCardHeight: (window.innerHeight - 220),
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
                for(let i = 0;i < _this.user.length;i++)
                {
                    if(_this.user[i].avatarBase64 == null)
                    {
                        _this.user[i].avatarBase64 = require('@/assets/webp/avatar/head-main.webp')
                    }
                }
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
        statusChange(i)
        {
            if(this.user[i].statusBool == true)
            {
                this.user[i].status = 1
            }
            else
            {
                this.user[i].status = 0
            }
            changeStatus({ username: this.user[i].username,status: this.user[i].status }).then()
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
            this.scrollCardHeight = (window.innerHeight - 220)
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