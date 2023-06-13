<template>
    <div>
        <el-card v-for="item in notes" :key="item.id" class="common-with-back-el-card-style">
            <h1 class="common-text-style">{{item.title}}</h1>
            <el-divider class="common-el-divider-style" />
            <p class="common-text-style">{{item.description}}</p>
        </el-card>
    </div>
</template>

<script>

export default
{
    name:'NotesCard',
    data()
    {
        return{
            notes:
            [
                {
                    id: 1,
                    title: "some text",
                    description: "some descrition",
                },
                {
                    id: 2,
                    title: "some text",
                    description: "some descrition",
                }
            ]
        }
    }
}
</script>

<style scoped>
    @import '@/assets/css/common.css';
</style>