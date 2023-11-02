import i18n from '@/language'
import { getTagByToken,updateNameByToken,updateMarkByToken,getUserByToken } from '@/axios/api/userApi'

const { t } = i18n.global
export default
{
    name: 'RersonalIndex',
    data()
    {
        return{
            gameWarma: require('@/assets/webp/background/gameWarma.webp'),
            avatar: 'head-main.webp',
            username: this.$store.getters.getUsername,
            tags: this.$store.getters.getTags,
            mark: this.$store.getters.getMark,
            tokenValue: localStorage.getItem('tokenValue'),
            paddingTop: "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
            dialogVisible: false,
            submitDialogVisible: false,
            submitDialog: '',
            usernameHoder: '',
            messageHoder: '',
            usernameInput: '',
            markInput: '',
            bottomData: 'bottom: -256px',
        }
    },
    methods:
    {
        switchBack()
        {
            this.bottomData = 'bottom: -500px'
            setTimeout( () => { this.$router.push('/Personal') },256)//延迟跳转 播放动画
        },
        switchSafety()
        {
            this.bottomData = 'bottom: -500px'
            setTimeout( () => { this.$router.push('/Safety') },256)//延迟跳转 播放动画
        },
        switchQuit()
        {
            this.dialogVisible = true
        },
        quiting()
        {
            localStorage.removeItem('tokenValue')
            this.$router.push('/Personal')
            this.$message.success({message: t('loginmessage.quit'),})
        },
        clickUsernameSubmit()
        {
            this.submitDialogVisible = true
            this.submitDialog = 0
            if(this.usernameInput == '')
            {
                this.$message.error({message: t('setting.notNull'),})
                this.submitDialogVisible = false
                this.submitDialog = ''
            }
        },
        clickMessageSubmit()
        {
            this.submitDialogVisible = true
            this.submitDialog = 1;
        },
        cancelChange()
        {
            this.submitDialogVisible = false
            this.submitDialog = ''
        },
        submitChange()
        {
            var _this = this
            if(this.submitDialog == 0)
            {
                updateNameByToken({ username: this.usernameInput,tokenValue: this.tokenValue }).then(function(resp){
                    if(resp.data.code == 200)
                    {
                        _this.username = _this.usernameInput
                        _this.$message.success({message: t('setting.changesuccess'),})
                        _this.usernameInput = ''
                    }
                    if(resp.data.code == 400)
                    {
                        _this.$message.warning({message: t('setting.failChange'),})
                    }
                })
            }
            if(this.submitDialog == 1)
            {
                updateMarkByToken({ mark: this.markInput,tokenValue: this.tokenValue }).then(function(resp){
                    _this.mark = _this.markInput
                    _this.$message.success({message: t('setting.changesuccess'),})
                    _this.markInput = ''
                })
            }
            this.submitDialog = ''
            this.submitDialogVisible = false
        },
    },
    mounted()
    {
        window.addEventListener('resize',() =>
            this.paddingTop = "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
        )
    },
    created()
    {
        if(this.tokenValue != null)
        {
            if(this.$store.getters.getStatus == '') //#优化 在没有经过 personalIndex 获取用户信息时才进行请求
            {
                var _this = this
                getUserByToken({ tokenValue: this.tokenValue }).then(function(resp){
                    if (resp && resp.status === 200)
                    {
                        _this.username = resp.data.username
                        _this.avatar = resp.data.avatar
                        _this.mark = resp.data.mark
                    }
                })
                getTagByToken({ tokenValue: this.tokenValue }).then(function(resp){
                    if (resp && resp.status === 200)
                    {
                        _this.tags = resp.data
                    }
                })
            }
            else
            {
                this.avatar = this.$store.getters.getAvatar
            }
        }
        this.usernameHoder = t('login.usernamehoder')
        this.messageHoder = t('login.messagehoder')
        setTimeout( () => { this.bottomData = 'bottom: 60px' },100)
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.usernameHoder = t('login.usernamehoder')
            this.messageHoder = t('login.messagehoder')
        }
    },
}