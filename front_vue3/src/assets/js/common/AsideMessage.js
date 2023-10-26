import LinkCard from '@/components/common/LinkCard'
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'AsideMessage',
    components: { LinkCard },
    data()
    {
        return{
            SRICAvater: require('@/assets/webp/logo/SRIC-Avatar.webp'),
            active: ''
        }
    },
    methods:
    {
        mouseOver()
        {
            if(isDark.value == true)
            {
                this.active = 'background: rgba(0,0,0,0.85)'
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