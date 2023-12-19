import i18n from '@/language'
import md5 from "js-md5"
import { getTagByToken,updateNameByToken,updateMarkByToken,updateAvatarByToken,getUserByToken } from '@/axios/api/userApi'
import { addFile,getAvatarById } from '@/axios/api/filesApi';
import { dataURLtoFile } from "@/assets/js/tools/base64ToFile";
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";

const { t } = i18n.global
export default
{
    name: 'RersonalIndex',
    components: { VueCropper },
    data()
    {
        return{
            gameWarma: require('@/assets/webp/background/gameWarma.webp'),
            avatar: require('@/assets/webp/avatar/head-main.webp'),
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
            imageDialogVisible: false,
            option:
            {
                img: '',
                size: 0.1,
                outputType: 'webp',
            },
            fileList: [],
            fileType: [ "jpg","jpeg","png" ],
            uploadFileName: '',
            password: '',
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
                updateNameByToken({ username: this.usernameInput,tokenValue: this.tokenValue,password: md5( this.username + this.password),newPassword: md5( this.usernameInput + this.password) }).then(function(resp){
                    if(resp.data.code == 200)
                    {
                        _this.username = _this.usernameInput
                        _this.$message.success({message: t('setting.changesuccess'),})
                        _this.usernameInput = ''
                    }
                    if(resp.data.code == 401)
                    {
                        _this.$message.warning({message: t('setting.failChange'),})
                    }
                    if(resp.data.code == 400)
                    {
                        _this.$message.error({message: t('loginmessage.wrong'),})
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
        handleExceed()
        {
            this.$message.error({message: t('message.deleteSuccess'),})
        },
        beforeUpload(file)
        {
            if(file.type != "" || file.type != null || file.type != undefined)
            {
                if ((file.size / 1024 / 1024) > 10) 
                {
                    this.$message.error({message: t('message.bigFile'),})
                    return false;
                }
            }
            if(this.fileType.includes(file.name.replace(/.+\./, "").toLowerCase())){}
            else
            {
                this.$message.error({message: t('message.typeFile'),})
                return false;
            }
        },
        uploadFile(params)
        {
            let file = params.file
            const name = params.file.name
            this.uploadFileName = name.substring(0, name.lastIndexOf("."))
            let reader = new FileReader()
            reader.readAsDataURL(file)
            var _this = this
            reader.onload = function(e)
            {
                _this.option.img = e.target.result
                _this.imageDialogVisible = true
            }
        },
        clickApply()
        {
            this.$refs.cropper.getCropData(data => {
                let fileName = this.uploadFileName + ".webp"
                let file = dataURLtoFile(data,fileName)
                var form = new FormData()
                form.append("file",file)
                var _this = this
                addFile(form).then(function(resp){
                    _this.imageDialogVisible = false
                    _this.changeAvatarForUser(resp.data)
                })
            })
        },
        changeAvatarForUser(id)
        {
            var _this = this
            updateAvatarByToken({ avatar: id,tokenValue: this.tokenValue }).then(function(resp){
                _this.$message.success({message: t('setting.changesuccess'),})
            })
        },
        getAvatar(id)
        {
            if(id != '')
            {
                var _this = this
                getAvatarById({ id: id, }).then(function(resp){
                    _this.avatar = resp.data
                })
            }
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
                        _this.mark = resp.data.mark
                        _this.getAvatar(resp.data.avatar)
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
                this.getAvatar(this.$store.getters.getAvatar)
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