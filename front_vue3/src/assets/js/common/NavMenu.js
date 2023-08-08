import { useDark, useToggle } from '@vueuse/core'
import { Sunny,Star,Open,Management } from '@element-plus/icons-vue'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'NavMenu',
    components: { Sunny,Star,Open,Management },
    data ()
    {
        return {
            SRICNavLogo: require('@/assets/images/logo/SRIC-NavLogo.png'),
            navList:
            [
                {name: 'index', navItem: '首页'},
                {name: 'notes', navItem: '笔记'},
                {name: 'resources', navItem: '资源'},
                {name: 'forun', navItem: '论坛'},
                {name: 'personal', navItem: '个人'},
            ],
            place: "top:" + (window.innerHeight - 32) + "px;left:" + (window.innerWidth/2 - 173) + "px;",
            progressData: 0,
            defaultActive: '',
            language: '0',
        }
    },
    methods:
    {
        switchThemes() 
        {
            const toggleDark = useToggle(isDark)
            toggleDark()
        },
        switchFire()
        {
            this.$emit('dochangefire')
        },
        switchFilter()
        {
            this.$emit('doChangeFilter')
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
            this.navList[0].navItem = t('menu.index')
        },
    },
    mounted()
    {
        window.addEventListener('resize',() =>
            this.place = "top:" + (window.innerHeight - 32) + "px;left:" + (window.innerWidth/2 - 173) + "px"
        )
    },
    created()
    {
        this.defaultActive = this.$route.name;
        this.changeLanguage()
    }
}