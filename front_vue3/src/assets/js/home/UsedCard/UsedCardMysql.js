import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'UsedCardMysql',
    data()
    {
        return{
            active: '',
            MysqlLogo: require('@/assets/webp/logo/logo-mysql.webp')
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