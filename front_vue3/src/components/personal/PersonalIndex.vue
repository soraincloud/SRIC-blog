<template>
    <div class="PersonalIndex-affix-div-style">
        <el-affix>
            <el-button 
            v-if="userId == null"
            @click="switchLogin"
            color="#ff6666" 
            class="PersonalIndex-affix-button-style" 
            plain>
            <el-icon class="PersonalIndex-affix-icon-style"><User/></el-icon>
            登录
            </el-button>
            <el-button 
            v-if="userId == null"
            @click="switchSignup"
            color="#ff6666" 
            class="PersonalIndex-affix-button-style" 
            plain>
            <el-icon class="PersonalIndex-affix-icon-style"><EditPen/></el-icon>
            注册
            </el-button>
            <el-button 
            v-if="userId != null"
            @click="switchSetting"
            color="#ff6666" 
            class="PersonalIndex-affix-button-style" 
            plain>
            <el-icon class="PersonalIndex-affix-icon-style"><Operation/></el-icon>
            选项
            </el-button>
        </el-affix>
    </div>
    <div class="PersonalIndex-avater-div-style" :style="paddingTop">
        <el-avatar :src="require('@/assets/images/logo/' + avatar)" :size="150" fit="scale-down"></el-avatar>
        <p class="PersonalIndex-name-style">{{ username }}</p>
        <el-tag
        v-for="(item,i) in tags"
        :key="i"
        effect="light"
        type="danger"
        size="small"
        class="PersonalIndex-el-tag-style"
        >
        {{ item.content }}
        </el-tag>
        <p class="PersonalIndex-mark-style">{{ mark }}</p>
    </div> 
</template>

<script>
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
        else
        {
            this.username = '没登陆所以没昵称哦'
            this.mark = "因为没有登录所以没有个人介绍哦,快去登录,然后写一个吧  ･ω･ )"
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
}
</script>

<style>
    @import '@/assets/css/personal/PersonalIndex.css';
</style>