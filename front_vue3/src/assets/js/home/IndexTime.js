import { useDark } from '@vueuse/core'
import { getIndexTimeList } from "@/axios/api/homeApi"

const isDark = useDark()
export default
{
    name: 'IndexHead',
    data()
    {
        return{
            active: '',
            timeline:[]
        }
    },
    mounted:function()
    {
        this.loadIndexTime()
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
        loadIndexTime()
        {
            var _this = this
            getIndexTimeList().then(function(resp){
                if (resp && resp.status === 200)
                {
                    _this.timeline = resp.data
                }
            })
        },
    }
}