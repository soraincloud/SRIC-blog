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
                    name: 'manageIndex',
                    navItem: '后台管理',
                    icon: 'Menu',
                },
            ],
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
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.navList[0].navItem = t('manageMenu.manage')
        }
    },
}