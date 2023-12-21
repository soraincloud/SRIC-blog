import { useDark, useToggle } from '@vueuse/core'
import { visitManage } from '@/axios/api/userApi'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'NavMenu',
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
                localStorage.setItem('language','zh')
            }
            else if(lang == 1)
            {
                this.$i18n.locale = 'en'
                localStorage.setItem('language','en')
            }
            else if(lang == 2)
            {
                this.$i18n.locale = 'warma'
                localStorage.setItem('language','warma')
            }
            this.navList[0].navItem = t('menu.index')
            this.navList[1].navItem = t('menu.note')
            this.navList[2].navItem = t('menu.resource')
            this.navList[3].navItem = t('menu.forum')
            this.navList[4].navItem = t('menu.personal')
            this.navList[5].navItem = t('menu.functions')
        },
        loadLanguage()
        {
            let lang = localStorage.getItem('language')
            if(lang == 'zh')
            {
                this.language = '0'
            }
            else if(lang == 'en')
            {
                this.language = '1'
            }
            else if(lang == 'warma')
            {
                this.language = '2'
            }
            this.navList[0].navItem = t('menu.index')
            this.navList[1].navItem = t('menu.note')
            this.navList[2].navItem = t('menu.resource')
            this.navList[3].navItem = t('menu.forum')
            this.navList[4].navItem = t('menu.personal')
            this.navList[5].navItem = t('menu.functions')
        },
        switchSetting()
        {
            let tokenValue = localStorage.getItem('tokenValue')
            if(tokenValue == null)
            {
                this.$message.error({message: t('message.noPermission'),})
            }
            else
            {
                var _this = this
                visitManage({ tokenValue: tokenValue }).then(function(resp){
                    if(resp.data.code == 200)
                    {
                        this.$router.push('/manageIndex')
                    }
                    else if(resp.data.code == 400)
                    {
                        this.$message.error({message: t('message.noPermission'),})
                    }
                    else
                    {
                        this.$message.error({message: t('message.errorCode'),})
                    }
                })
            }
            
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
        this.loadLanguage()
    }
}