import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'UsedCard',
    data()
    {
        return{
            cards:
            [
                {
                    active: '',
                    logo: require('@/assets/webp/logo/logo-vue.webp'),
                },
                {
                    active: '',
                    logo: require('@/assets/webp/logo/logo-springboot.webp'),
                },
                {
                    active: '',
                    logo: require('@/assets/webp/logo/logo-mysql.webp'),
                },
                {
                    active: '',
                    logo: require('@/assets/webp/logo/logo-element.webp'),
                },
                {
                    active: '',
                    logo: require('@/assets/webp/logo/logo-axios.webp'),
                },
                {
                    active: '',
                    logo: require('@/assets/webp/logo/logo-echarts.webp'),
                },
                {
                    active: '',
                    logo: require('@/assets/webp/logo/logo-i18n.webp'),
                },
                {
                    active: '',
                    logo: require('@/assets/webp/logo/logo-saToken.webp'),
                },
            ],
        }
    },
    methods:
    {
        mouseOver(i)
        {
            if(isDark.value == true)
            {
                this.cards[i].active = 'background: rgba(255,255,255,0.8)'
            }
            else
            {
                this.cards[i].active = 'background: rgba(0,0,0,0.8);'
            }
        },
        mouseLeave(i)
        {
            this.cards[i].active = ''
        }
    }
}