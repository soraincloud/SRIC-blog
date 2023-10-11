import { useDark, useToggle } from '@vueuse/core'
import { Sunny,Star,Open,Management } from '@element-plus/icons-vue'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'NavMenu',
    components: { Sunny,Star,Open,Management },
    emits: ['dochangefire','doChangeFilter'],//提前声明emit 消除警告
    data ()
    {
        return {
            SRICNavLogo: require('@/assets/webp/logo/SRIC-NavLogo.webp'),
            navList:
            [
                {name: 'index', navItem: '首页'},
                {name: 'notes', navItem: '笔记'},
                {name: 'resources', navItem: '资源'},
                {name: 'forum', navItem: '论坛'},
                {name: 'personal', navItem: '个人'},
                {name: 'function', navItem: '功能'},
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
            else if(lang == 2)
            {
                this.$i18n.locale = 'warma'
            }
            this.navList[0].navItem = t('menu.index')
            this.navList[1].navItem = t('menu.note')
            this.navList[2].navItem = t('menu.resource')
            this.navList[3].navItem = t('menu.forum')
            this.navList[4].navItem = t('menu.personal')
            this.navList[5].navItem = t('menu.functions')
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