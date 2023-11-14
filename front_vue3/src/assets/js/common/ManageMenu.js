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
                _this.navList.push(resp.data[i])
            }
        })
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.navList[0].navItem = t('manageMenu.manage')
        }
    },
}