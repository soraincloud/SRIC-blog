import { useDark, useToggle } from '@vueuse/core'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'ManageBar',
    data()
    {
        return{
            SRICNavLogo: require('@/assets/webp/logo/SRIC-NavLogo.webp'),
            place: "top:" + (window.innerHeight - 32) + "px;left:" + (window.innerWidth/2 - 173) + "px;",
            language: '0',
        }
    },
    mounted()
    {
        window.addEventListener('resize',() =>
            this.place = "top:" + (window.innerHeight - 32) + "px;left:" + (window.innerWidth/2 - 173) + "px"
        )
    },
    methods:
    {
        switchThemes() 
        {
            const toggleDark = useToggle(isDark)
            toggleDark()
        },
        changeLanguage()
        {
            const lang = this.language;
            if(lang == 0)
            {
                this.$i18n.locale = 'zh'
            }
            else if(lang == 1)
            {
                this.$i18n.locale = 'en'
            }
            else if(lang == 2)
            {
                this.$i18n.locale = 'warma'
            }
        },
        switchSetting()
        {
            this.$router.push('/index')
        },
    },
}