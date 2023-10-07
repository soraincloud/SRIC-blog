import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'UsedCardElement',
    data()
    {
        return{
            active: '',
            ElementLogo: require('@/assets/webp/logo/logo-element.webp')
        }
    },
    methods:
    {
        mouseOver()
        {
            if(isDark.value == true)
            {
                this.active = 'background: rgba(255,255,255,0.8)'
            }
            else
            {
                this.active = 'background: rgba(0,0,0,0.8);'
            }
        },
        mouseLeave()
        {
            this.active = ''
        }
    }
}