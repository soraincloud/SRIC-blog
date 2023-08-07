import { User,Lock } from '@element-plus/icons-vue'
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'LoginPage',
    components: { User,Lock },
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
                    this.$message.success({message: '登录成功 欢迎回来喵 ~',})
                    localStorage.setItem('userId',resp.data.id)
                    this.$router.push('/Personal')
                }
                else if(resp.data.code == 400)
                {
                    this.$message.error({message: '密码错误 戳啦 戳啦 戳啦 awa',})
                }
                else if(resp.data.code == 401)
                {
                    this.$message.warning({message: '查无此人 是不是账户填错了 qwq',})
                }
                else
                {
                    this.$message.error({message: 'error 你是不是乱改东西了(凶)',})
                }
            })
        },
    },
    mounted()
    {
        window.addEventListener('resize',() =>
            this.paddingTop = "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
        )
    },
}