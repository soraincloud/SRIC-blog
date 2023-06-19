<template>
    <el-row>
        <el-col :span="8"></el-col>
        <el-col :span="8">
            <div :style="paddingTop" @mouseover="mouseOver" @mouseleave="mouseLeave">
                <el-card class="LoginPage-el-card-style" :style="active">
                    <div class="LoginPage-inside-div-style">
                        <h1 class="LoginPage-title-style">登 录</h1>
                        <el-form>
                            <el-form-item label="账户">
                                <el-input v-model="form.username">
                                    <template #prefix>
                                        <el-icon><User /></el-icon>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="form.password" type="password" show-password>
                                    <template #prefix>
                                        <el-icon><Lock /></el-icon>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button 
                                @click="login"
                                size="small" 
                                class="LoginPage-submit-button-style" 
                                style="margin-left:40px" 
                                type="danger" 
                                plain>登录</el-button>
                                <el-button 
                                size="small" 
                                class="LoginPage-submit-button-style" 
                                type="danger" 
                                plain>忘记密码</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="8"></el-col>
    </el-row>
</template>

<script>
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
</script>


<style>
    @import '@/assets/css/personal/LoginPage.css';
</style>