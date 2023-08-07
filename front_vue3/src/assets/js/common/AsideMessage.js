import LinkCard from '@/components/common/LinkCard'
import { StarFilled } from '@element-plus/icons-vue'
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'AsideMessage',
    components: { StarFilled,LinkCard },
    data()
    {
        return{
            SRICAvater: require('@/assets/images/logo/SRIC-Avatar.jpg'),
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