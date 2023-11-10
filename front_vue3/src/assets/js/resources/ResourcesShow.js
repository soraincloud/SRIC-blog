import { getResourceById } from "@/axios/api/resourcesApi"

export default
{
    name: 'ResourcesShow',
    data()
    {
        return{
            resources: [],
            h1Top: 'top:' + (window.innerHeight / 2 - 120) + 'px;',
            h1Left: 'left:' + -500 + 'px',
            divTop: 'top:' + (window.innerHeight / 2 - 120) + 'px;',
            divLeft: 'left:' + window.innerWidth + 'px',
            h3Top: 'top:' + (window.innerHeight / 2 - 110) + 'px;',
            h3Left: 'left:' + -500 + 'px',
            buttonTop: 'top:' + (window.innerHeight / 2 - 100) + 'px;',
            buttonLeft: 'left:' + window.innerWidth + 'px',
            guitar: require('@/assets/webp/background/guitar.webp'),
            bottomData: 'bottom:' + -480 + 'px;'
        }
    },
    created()
    {
        var _this = this
        getResourceById({ id: localStorage.getItem('resourcesId') }).then(function(resp){
            _this.resources = resp.data
        })
        setTimeout( () => {
            this.h1Left = 'left:' + (window.innerWidth / 2) + 'px'
            this.divLeft = 'left:' + (window.innerWidth / 2 + 100) + 'px'
            this.h3Left = 'left:' + (window.innerWidth / 2 - 50) + 'px'
            this.buttonLeft = 'left:' + (window.innerWidth / 2 + 300) + 'px'
            this.bottomData = 'bottom:' + 60 + 'px;'
        },100)

    },
    methods:
    {
        clickDownload()
        {

        },
        clickBack()
        {
            this.h1Left = 'left:' + -500 + 'px'
            this.divLeft = 'left:' + window.innerWidth + 'px'
            this.h3Left = 'left:' + -500 + 'px'
            this.buttonLeft = 'left:' + window.innerWidth + 'px'
            this.bottomData = 'bottom:' + -480 + 'px;'
            setTimeout( () => {
                this.$router.go(-1)
            },450)
        },
    }
}