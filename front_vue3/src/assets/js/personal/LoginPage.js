import { User,Lock,ArrowLeftBold } from '@element-plus/icons-vue'
import { useDark } from '@vueuse/core'
import i18n from '@/language'
import md5 from "js-md5"
import { login } from '@/axios/api/userApi'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'LoginPage',
    components: { User,Lock,ArrowLeftBold },
    data()
    {
        return{
            paddingTop: "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
            form:
            {
                username: '',
                password: '',
            },
            active: '',
        }
    },
    methods:
    {
        mouseOver()
        {
            if(isDark.value == true)
            {
                this.active = 'background: rgba(0,0,0,0.85);'
            }
            else
            {
                this.active = 'background: rgba(255,255,255,0.85);'
            }
        },
        mouseLeave()
        {
            this.active = ''
        },
        login()
        {
            var _this = this
            login({ username: this.form.username,password: md5( this.form.username + this.form.password) }).then(function(resp){
                if(resp.data.code == 200)
                {
                    _this.$message.success({message: t('loginmessage.success'),})
                    localStorage.setItem('userId',resp.data.id)
                    _this.$router.push('/Personal')
                }
                else if(resp.data.code == 400)
                {
                    _this.$message.error({message: t('loginmessage.wrong'),})
                }
                else if(resp.data.code == 401)
                {
                    _this.$message.warning({message: t('loginmessage.none'),})
                }
                else
                {
                    _this.$message.error({message: t('loginmessage.error'),})
                }
            })
        },
        clickBack()
        {
            this.$router.push('/Personal')
        }
    },
    mounted()
    {
        window.addEventListener('resize',() =>
            this.paddingTop = "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
        )
    },
}