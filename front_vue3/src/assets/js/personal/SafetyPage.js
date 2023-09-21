export default
{
    name:'SafetyPage',
    data()
    {
        return{
            anger: require('@/assets/images/background/anger.png'),
            passwordBorder: 'border-color: rgba(255,255,255,0);',
            passwordBackground: 'background: rgba(252,204,204,0);',
            phoneBorder: 'border-color: rgba(255,255,255,0);',
            phoneBackground: 'background: rgba(252,204,204,0);',
            mailBorder: 'border-color: rgba(255,255,255,0);',
            mailBackground: 'background: rgba(252,204,204,0);',
            paddingTop: "padding-top:" + ((window.innerHeight - 500) / 2) + "px;",
            phoneNumber: this.$store.getters.getPhonenumber,
            mail: this.$store.getters.getEmail,
            userId: localStorage.getItem('userId'),
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
    },
    created()
    {
        if(this.$store.getters.getStatus == '') //#优化 在没有经过 personalIndex 获取用户信息时才进行请求
        {
            var _this = this
            this.$axios
            .get('/getUserById',{ params:{ id: this.userId} })
            .then(resp =>
            {
                if (resp && resp.status === 200)
                {
                    _this.phoneNumber = resp.data.phonenumber
                    _this.mail = resp.data.email
                }
            })
        }
    }
}