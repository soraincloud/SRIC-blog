import { User,Lock,ArrowLeftBold } from '@element-plus/icons-vue'

export default
{
    name: 'SignupPage',
    components: { User,Lock,ArrowLeftBold },
    data()
    {
        return{
            angel: require('@/assets/images/background/angel.png'),
            paddingTop: "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
            form:
            {
                username: '',
                password: '',
            },
            submitDialogVisible: false,
            mailInput: '',
            codeInput: '',
            bottomData: 'bottom: -300px',
        }
    },
    mounted()
    {
        window.addEventListener('resize',() =>
            this.paddingTop = "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
        )
    },
    methods:
    {
        switchSubmit()
        {
            this.submitDialogVisible = true
        },
        clickSendCode()
        {

        },
        submitSign()
        {

        },
        cancelSign()
        {
            this.mailInput = ''
            this.codeInput = ''
            this.submitDialogVisible = false
        },
        clickBack()
        {
            this.bottomData = 'bottom: -500px'
            setTimeout( () => { this.$router.push('/Personal') },256)//延迟跳转 播放动画
        },
    },
    created()
    {
        setTimeout( () => { this.bottomData = 'bottom: 60px' },100)
    }
}