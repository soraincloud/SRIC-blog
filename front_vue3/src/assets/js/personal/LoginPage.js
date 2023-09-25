import { User,Lock,ArrowLeftBold } from '@element-plus/icons-vue'
import { useDark } from '@vueuse/core'
import i18n from '@/language'

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
            this.$axios
            .post('/login',{ username: this.form.username,password: this.form.password })
            .then(resp =>
            {
                if(resp.data.code == 200)
                {
                    this.$message.success({message: t('loginmessage.success'),})
                    localStorage.setItem('userId',resp.data.id)
                    this.$router.push('/Personal')
                }
                else if(resp.data.code == 400)
                {
                    this.$message.error({message: t('loginmessage.wrong'),})
                }
                else if(resp.data.code == 401)
                {
                    this.$message.warning({message: t('loginmessage.none'),})
                }
                else
                {
                    this.$message.error({message: t('loginmessage.error'),})
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