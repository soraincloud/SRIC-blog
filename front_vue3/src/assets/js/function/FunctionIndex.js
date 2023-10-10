import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'FunctionIndex',
    data()
    {
        return{
            headYuan: require('@/assets/webp/logo/function-head.webp'),
            active: '',
        }
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
        mouseClick()
        {
            this.$router.push('/FunctionHead')
        },
    }
}