import { getAllManageMenu } from '@/axios/api/manageApi'
import i18n from '@/language'

const { t } = i18n.global
export default
{
    name: 'ManageMenu',
    data()
    {
        return{
            isCollapse: false,
            defaultActive: '',
            buttonIcon: 'ArrowLeftBold',
            navList: 
            [
                {
                    id: 0,
                    name: 'manageIndex',
                    navItem: '后台管理',
                    icon: 'Menu',
                },
            ],
            language: localStorage.getItem('language'),
            scrollHeight: window.innerHeight,
        }
    },
    methods:
    {
        clickChange()
        {
            if(this.isCollapse == false)
            {
                this.isCollapse = true
                this.buttonIcon = 'ArrowRightBold'
            }
            else
            {
                this.isCollapse = false
                this.buttonIcon = 'ArrowLeftBold'
            }

        }
    },
    created()
    {
        this.defaultActive = this.$route.name;
        this.navList[0].navItem = t('manageMenu.manage')
        var _this = this
        getAllManageMenu().then(function(resp){
            for(let i = 0;i < resp.data.length;i++)
            {
                if(_this.language == 'zh')
                {
                    resp.data[i].navItem = resp.data[i].zh
                }
                else if(_this.language == 'en')
                {
                    resp.data[i].navItem = resp.data[i].en
                }
                else if(_this.language == 'warma')
                {
                    resp.data[i].navItem = resp.data[i].warma
                }
                _this.navList.push(resp.data[i])
            }
        })
    },
    mounted()
    {
        window.addEventListener("resize", () => {
            this.scrollHeight = window.innerHeight
        })
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.navList[0].navItem = t('manageMenu.manage')
            if(newValue == 'zh')
            {
                for(let i = 1;i < this.navList.length;i++)
                {
                    this.navList[i].navItem = this.navList[i].zh
                }
            }
            else if(newValue == 'en')
            {
                for(let i = 1;i < this.navList.length;i++)
                {
                    this.navList[i].navItem = this.navList[i].en
                }
            }
            else if(newValue == 'warma')
            {
                for(let i = 1;i < this.navList.length;i++)
                {
                    this.navList[i].navItem = this.navList[i].warma
                }
            }
        }
    },
}