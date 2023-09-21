import { User,EditPen,Operation } from '@element-plus/icons-vue'
import i18n from '@/language'

const { t } = i18n.global
export default
{
    name: 'RersonalIndex',
    components: { User,EditPen,Operation },
    data()
    {
        return{
            avatar: 'head-main.png',
            username: this.$store.getters.getUsername,
            tags: this.$store.getters.getTags,
            mark: this.$store.getters.getMark,
            userId: localStorage.getItem('userId'),
            paddingTop: "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
            dialogVisible: false,
            submitDialogVisible: false,
            submitDialog: '',
            usernameHoder: '',
            messageHoder: '',
            usernameInput: '',
            markInput: '',
        }
    },
    methods:
    {
        switchBack()
        {
            this.$router.push('/Personal')
        },
        switchSafety()
        {
            this.$router.push('/safety')
        },
        switchQuit()
        {
            this.dialogVisible = true
        },
        quiting()
        {
            localStorage.removeItem('userId')
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
                this.$axios
                .post('/updateNameById',{ username: this.usernameInput,id: this.userId })
                .then(resp =>
                {
                    console.log(resp.data.code)
                    if(resp.data.code == 200)
                    {
                        console.log('success')
                        this.username = this.usernameInput
                        this.$message.success({message: t('setting.changesuccess'),})
                        this.usernameInput = ''
                    }
                    if(resp.data.code == 400)
                    {
                        console.log('fail')
                        this.$message.warning({message: t('setting.failChange'),})
                    }
                })
            }
            if(this.submitDialog == 1)
            {
                this.$axios
                .post('/updateMarkById',{ mark: this.markInput,id: this.userId })
                this.mark = this.markInput
                this.$message.success({message: t('setting.changesuccess'),})
                this.markInput = ''
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
        if(this.userId != null)
        {
            if(this.$store.getters.getStatus == '') //#优化 在没有经过 personalIndex 获取用户信息时才进行请求
            {
                console.log('res')
                var _this = this
                this.$axios
                .get('/getUserById',{ params:{ id: this.userId} })
                .then(resp =>
                {
                    if (resp && resp.status === 200)
                    {
                        _this.username = resp.data.username
                        _this.mark = resp.data.mark
                    }
                })
                this.$axios
                .get('/getTagByUid',{ params:{ uid: this.userId } })
                .then(resp => 
                {
                    if (resp && resp.status === 200)
                    {
                        _this.tags = resp.data
                    }
                })
            }
        }
        this.usernameHoder = t('login.usernamehoder')
        this.messageHoder = t('login.messagehoder')
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