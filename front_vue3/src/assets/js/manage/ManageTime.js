export default
{
    name: 'ManageTime',
    data()
    {
        return{
            bodyHeight: (window.innerHeight - 60) + 'px',
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = (window.innerHeight - 70) + 'px'
        }
    },
}