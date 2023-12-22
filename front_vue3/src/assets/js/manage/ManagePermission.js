import { getAllStatus } from '@/axios/api/userApi'
import { getAllManageMenu } from '@/axios/api/manageApi'
import i18n from '@/language'

const { t } = i18n.global
export default
{
    name: 'ManageFiles',
    data()
    {
        return {
            loading: false,
            bodyHeight: "height:" + (window.innerHeight - 80) + "px;",
            outDivHeight: 'height: ' + (window.innerHeight) + 'px;',
            scrollCardHeight: (window.innerHeight - 150),
            status: [],
            select: 1,
            menus: [],
        }
    },
    methods:
    {
        getStatus()
        {
            var _this = this
            getAllStatus().then(function(resp){
                _this.status = resp.data
            })
        },
        getMenus()
        {
            var _this = this
            getAllManageMenu().then(function(resp){
                _this.menus = resp.data
            })
        },
        getPermission()
        {

        },
    },
    created()
    {
        this.getStatus()
        this.getMenus()
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
            
        }
    },
}