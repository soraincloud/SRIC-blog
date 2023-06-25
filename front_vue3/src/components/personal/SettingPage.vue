<template>
    <el-row>
        <el-col :span="12">
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
        </el-col>
        <el-col :span="10">
            <div :style="paddingTop">
                <el-card class="LoginPage-el-card-style">
                    <div style="margin-top:64px;">
                        <el-input
                        v-model="usernameInput"
                        maxlength="20"
                        placeholder="更改用户名"
                        type="text"
                        class="SettingPage-el-input-style"
                        clearable
                        >
                        <template #append>
                            <el-button>
                                提交
                            </el-button>
                        </template>
                        </el-input>
                    </div>
                    <div class="SettingPage-input-div-style">
                        <el-input
                        v-model="markInput"
                        maxlength="50"
                        placeholder="更改个人资料"
                        type="text"
                        class="SettingPage-el-input-style"
                        clearable
                        >
                        <template #append>
                            <el-button>
                                提交
                            </el-button>
                        </template>
                        </el-input>
                    </div>
                    <div class="SettingPage-input-div-style">
                        <el-row>
                            <el-col :span="6">
                                <el-button class="SettingPage-input-button-style" type="danger">返回</el-button>
                            </el-col>
                            <el-col :span="3"></el-col>
                            <el-col :span="6">
                                <el-button class="SettingPage-input-button-style" type="danger">更改密码</el-button>
                            </el-col>
                            <el-col :span="3"></el-col>
                            <el-col :span="6">
                                <el-button class="SettingPage-input-button-style" type="danger">退出登录</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
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
            tags: '',
            mark: '',
            userId: localStorage.getItem('userId'),
            paddingTop: "padding-top:" + ((window.innerHeight - 360) / 2) + "px;",
        }
    },
    methods:
    {

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
</script>

<style scoped>
    @import '@/assets/css/personal/PersonalIndex.css';
    @import '@/assets/css/personal/LoginPage.css';
    @import '@/assets/css/personal/SettingPage.css';
</style>