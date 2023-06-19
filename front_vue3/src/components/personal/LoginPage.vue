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
                                <el-button size="small" class="LoginPage-submit-button-style" style="margin-left:40px" type="danger" plain>登录</el-button>
                                <el-button size="small" class="LoginPage-submit-button-style" type="danger" plain>忘记密码</el-button>
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