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
                                <el-button class="SettingPage-input-button-style" type="danger" @click="switchBack">返回</el-button>
                            </el-col>
                            <el-col :span="3"></el-col>
                            <el-col :span="6">
                                <el-button class="SettingPage-input-button-style" type="danger" @click="switchChange">账户安全</el-button>
                            </el-col>
                            <el-col :span="3"></el-col>
                            <el-col :span="6">
                                <el-button class="SettingPage-input-button-style" type="danger" @click="switchQuit">退出登录</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>

    <el-dialog
        v-model="dialogVisible"
        title="真的吗?"
        width="30%"
        style="font-weight:bold;"
        :before-close="handleClose"
        >
        <span>真的要退出登录吗?</span>
        <template #footer>
        <span class="dialog-footer">
            <el-row>
                <el-col :span="10">
                    <el-button class="SettingPage-input-button-style" type="danger" @click="dialogVisible = false">不</el-button>
                </el-col>
                <el-col :span="4"></el-col>
                <el-col :span="10">
                    <el-button class="SettingPage-input-button-style" type="danger" @click="quiting">是的</el-button>
                </el-col>
            </el-row>
            

        </span>
        </template>
    </el-dialog>

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
</script>

<style scoped>
    @import '@/assets/css/personal/PersonalIndex.css';
    @import '@/assets/css/personal/LoginPage.css';
    @import '@/assets/css/personal/SettingPage.css';
</style>