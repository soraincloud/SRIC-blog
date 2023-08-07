import { User,EditPen,Operation } from '@element-plus/icons-vue'

export default
{
    name: 'RersonalIndex',
    components: { User,EditPen,Operation },
    data()
    {
        return{
            avatar: 'head-main.png',
            username: '',
            tags: '',
            mark: '',
            userId: localStorage.getItem('userId'),
            paddingTop: "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
            dialogVisible: false,
        }
    },
    methods:
    {
        switchBack()
        {
            this.$router.push('/Personal')
        },
        switchQuit()
        {
            this.dialogVisible = true
        },
        quiting()
        {
            localStorage.removeItem('userId')
            this.$router.push('/Personal')
            this.$message.success({message: '退出登录啦',})
        }
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
}