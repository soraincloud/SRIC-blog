export default
{
    name: 'ManageMenu',
    data()
    {
        return{
            isCollapse: false,
            defaultActive: '',
            navList: [
                {
                    name: 'manageIndex',
                    navItem: '后台管理',
                    icon: 'Menu',
                },
            ],
        }
    },
    created()
    {
        this.defaultActive = this.$route.name;
    }
}