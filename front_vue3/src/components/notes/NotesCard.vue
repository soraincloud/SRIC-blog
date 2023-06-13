<template>
    <el-card v-for="item in notes" :key="item.id" class="notes-with-back-el-card-style">
        <h1>{{item.title}}</h1>
        <p>{{item.description}}</p>
    </el-card>
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
.notes-with-back-el-card-style
{
    margin-top: 10px;
    background: rgba(255,255,255,0.64);
}
</style>