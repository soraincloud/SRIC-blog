import { useDark, useToggle } from '@vueuse/core'
import { Sunny,Star,Open } from '@element-plus/icons-vue'

const isDark = useDark()
export default
{
    name: 'NavMenu',
    components: { Sunny,Star,Open },
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
    }
}