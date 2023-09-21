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
            username: '',
            paddingTop: "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
            tags: [],
            mark: "",
            userId: localStorage.getItem('userId'),
        }
    },
    methods:
    {
        switchLogin()
        {
            this.$router.push('/Login')
        },
        switchSetting()
        {
            this.$router.push('/Setting')
        },
        switchSignup()
        {
            this.$router.push('/Signup')
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
            var _this = this
            this.$axios
            .get('/getUserById',{ params:{ id: this.userId} })
            .then(resp =>
            {
                if (resp && resp.status === 200)
                {
                    _this.username = resp.data.username
                    _this.mark = resp.data.mark
                    _this.$store.commit('setUsername',resp.data.username)
                    _this.$store.commit('setPassword',resp.data.password)
                    _this.$store.commit('setMark',resp.data.mark)
                    _this.$store.commit('setPhonenumber',resp.data.phonenumber)
                    _this.$store.commit('setEmail',resp.data.email)
                    _this.$store.commit('setStatus',resp.data.status)
                }
            })
            this.$axios
            .get('/getTagByUid',{ params:{ uid: this.userId } })
            .then(resp => 
            {
                if (resp && resp.status === 200)
                {
                    _this.tags = resp.data
                    _this.$store.commit('setTags',resp.data)
                }
            })
        }
        else
        {
            this.username = t('login.mark1')
            this.mark = t('login.mark2')
            this.tags = 
            [
                {
                    content: "neko",
                },
                {
                    content: "nia",
                },
                {
                    content: "miao",
                },
                {
                    content: "wu nia",
                },
                {
                    content: "www",
                },
            ]
        }
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.username = t('login.mark1')
            this.mark = t('login.mark2')
            if(this.userId != null)
            {
                this.username = this.$store.getters.getUsername
                this.mark = this.$store.getters.getMark
            }
        }
    },
}