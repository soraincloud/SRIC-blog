import UsedCard from '@/components/home/UsedCard'
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'IndexUsed',
    components: { UsedCard },
    data()
    {
        return{
            active: ''
        }
    },
    methods:
    {
        mouseEnter()
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
        }
    }
}