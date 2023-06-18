<template>
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
var userId

export default
{
    name: 'RersonalIndex',
    data()
    {
        return{
            avatar: 'head-main.png',
            username: '没登陆所以没昵称哦',
            paddingTop: "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
            tags: 
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
            ],
            mark: "因为没有登录所以没有个人介绍哦,快去登录,然后写一个吧  ･ω･ )"
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
        userId = localStorage.getItem('userId')
        if(userId != null)
        {
            var _this = this
            this.$axios
            .get('/getUserById',{ params:{ id: userId} })
            .then(resp =>
            {
                if (resp && resp.status === 200)
                {
                    _this.username = resp.data.username
                }
            })
            this.$axios
            .get('/getTagByUid',{ params:{ uid: userId } })
            .then(resp => 
            {
                if (resp && resp.status === 200)
                {
                    _this.tags = resp.data
                }
            })
        }
    },
}
</script>

<style>
    @import '@/assets/css/personal/PersonalIndex.css';
</style>