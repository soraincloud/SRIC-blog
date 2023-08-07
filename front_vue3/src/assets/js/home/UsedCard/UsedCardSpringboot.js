import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'UsedCardSpringboot',
    data()
    {
        return{
            active: '',
            SpringbootLogo: require('@/assets/images/logo/logo-springboot.png')
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