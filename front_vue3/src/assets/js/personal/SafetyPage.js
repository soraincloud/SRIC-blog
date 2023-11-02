import { getUserByToken } from '@/axios/api/userApi'

export default
{
    name:'SafetyPage',
    data()
    {
        return{
            anger: require('@/assets/webp/background/anger.webp'),
            passwordBorder: 'border-color: rgba(255,255,255,0);',
            passwordBackground: 'background: rgba(252,204,204,0);',
            phoneBorder: 'border-color: rgba(255,255,255,0);',
            phoneBackground: 'background: rgba(252,204,204,0);',
            mailBorder: 'border-color: rgba(255,255,255,0);',
            mailBackground: 'background: rgba(252,204,204,0);',
            paddingTop: "padding-top:" + ((window.innerHeight - 500) / 2) + "px;",
            phoneNumber: this.$store.getters.getPhonenumber,
            mail: this.$store.getters.getEmail,
            tokenValue: localStorage.getItem('tokenValue'),
            leftData: 'left: -512px',
        }
    },
    mounted()
    {
        window.addEventListener('resize',() =>
            this.paddingTop = "padding-top:" + ((window.innerHeight - 500) / 2) + "px;",
        )
    },
    methods:
    {
        overPassword()
        {
            this.passwordBorder = 'border-color: white;'
            this.passwordBackground = 'background: rgba(252,204,204,0.64);'
        },
        leavePassword()
        {
            this.passwordBorder = 'border-color: rgba(255,255,255,0);'
            this.passwordBackground = 'background: rgba(252,204,204,0);'  
        },
        overPhone()
        {
            this.phoneBorder = 'border-color: white;'
            this.phoneBackground = 'background: rgba(252,204,204,0.64);'
        },
        leavePhone()
        {
            this.phoneBorder = 'border-color: rgba(255,255,255,0);'
            this.phoneBackground = 'background: rgba(252,204,204,0);'  
        },
        overMail()
        {
            this.mailBorder = 'border-color: white;'
            this.mailBackground = 'background: rgba(252,204,204,0.64);'
        },
        leaveMail()
        {
            this.mailBorder = 'border-color: rgba(255,255,255,0);'
            this.mailBackground = 'background: rgba(252,204,204,0);'  
        },
        clickBack()
        {
            this.leftData = 'left: -1000px'
            setTimeout( () => { this.$router.push('/Setting') },256)//延迟跳转 播放动画
        },
    },
    created()
    {
        if(this.$store.getters.getStatus == '') //#优化 在没有经过 personalIndex 获取用户信息时才进行请求
        {
            var _this = this
            getUserByToken({ tokenValue: this.tokenValue}).then(function(resp){
                    _this.phoneNumber = resp.data.phonenumber
                    _this.mail = resp.data.email
            })
        }
        setTimeout( () => { this.leftData = 'left: -0px' },100)
    },
}