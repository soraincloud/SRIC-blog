import { getAllStatus } from '@/axios/api/userApi'
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
            status: [],
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
        }
    },
    created()
    {
        
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = "height:" + (window.innerHeight - 80) + "px;"
            this.outDivHeight = 'height: ' + (window.innerHeight) + 'px;'
        }
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            
        }
    },
}