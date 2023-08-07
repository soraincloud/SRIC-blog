import UsedCardVue from '@/components/home/UsedCard/UsedCardVue'
import UsedCardSpringboot from '@/components/home/UsedCard/UsedCardSpringboot'
import UsedCardMysql from '@/components/home/UsedCard/UsedCardMysql'
import UsedCardElement from '@/components/home/UsedCard/UsedCardElement'
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'IndexUsed',
    components: { UsedCardVue,UsedCardSpringboot,UsedCardMysql,UsedCardElement },
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