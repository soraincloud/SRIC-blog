<template>
    <el-row>
        <el-col :span="10">
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
        <el-col :span="1">

        </el-col>
        <el-col :span="12">

        </el-col>
        <el-col :span="1">

        </el-col>
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
            tags: [],
            mark: "",
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
}
</script>