import { useDark } from '@vueuse/core'
import { getResourcesList } from '@/axios/api/resourcesApi'

const isDark = useDark()
export default
{
    name:'ResourcesCard',
    data()
    {
        return{
            resources:[]
        }
    },
    methods:
    {
        over(i)
        {
            if(isDark.value == true)
            {
                this.resources[i].backgrounds = "background: rgba(0,0,0,0.85);"
            }
            else
            {
                this.resources[i].backgrounds = "background: rgba(255,255,255,0.85);"
            }
        },
        leave(i)
        {
            this.resources[i].backgrounds = ""
        },
        clickCard(i)
        {
            localStorage.setItem('resourcesId',this.resources[i].id)
            localStorage.setItem('resourcesMd',this.resources[i].md)
            this.$router.push('/resourcesShow')
        },
        loadResources()
        {
            var _this = this
            getResourcesList().then(function(resp){
                if (resp && resp.status === 200)
                {
                    _this.resources = resp.data
                }
            })
        },
    },
    mounted:function()
    {
        this.loadResources()
    },
}