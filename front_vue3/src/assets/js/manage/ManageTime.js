import { getIndexTimeList } from "@/axios/api/homeApi"
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'ManageTime',
    data()
    {
        return{
            bodyHeight: (window.innerHeight - 60) + 'px',
            timeline:[],
            active: '',
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = (window.innerHeight - 70) + 'px'
        }
    },
    created()
    {
        var _this = this
        getIndexTimeList().then(function(resp){
            _this.timeline = resp.data
            _this.loading = false
        })
    },
    methods:
    {
        mouseOver()
        {
            if(isDark.value == true)
            {
                this.active = 'background: rgba(0,0,0,0.3);'
            }
            else
            {
                this.active = 'background: rgba(255,255,255,0.3)'
            }
        },
        mouseLeave()
        {
            this.active = ''
        },
    },
}