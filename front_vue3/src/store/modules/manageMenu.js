export default
{
    state:
    {
        manageMenu: '',
    },
    getters:
    {
        getManageMenu(state)
        {
            return state.manageMenu;
        },
    },
    mutations:
    {
        setManageMenu(state,manageMenu)
        {
            state.manageMenu = manageMenu;
        },
    },
}