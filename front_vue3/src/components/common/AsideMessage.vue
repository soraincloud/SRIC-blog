<template>
    <el-card class="AsideMessage-el-card-style">
        <div class="AsideMessage-message-div-style">
            <el-avatar :src="SRICAvater" class="AsideMessage-el-avater-style" fit="scale-down"></el-avatar>
            <div class="AsideMessage-name-div-style">
                <span>soraincloud</span>
            </div>
        </div>
    </el-card>
</template>

<script>
export default
{
    name: 'AsideMessage',
    data()
    {
        return{
            SRICAvater: require('@/assets/images/logo/SRIC-Avatar.png')
        }
    }
}
</script>

<style scoped>
.AsideMessage-el-card-style
{
    width: 100%;
    height: 100%;
    margin-top: 10px;
}

.AsideMessage-message-div-style
{
    text-align: center;
    margin-top: 32px;
    color: #666666;
}

.AsideMessage-el-avater-style
{
    width: 64px;
    height: 64px;
}

.AsideMessage-name-div-style
{
    margin-top: 10px;
}

html.dark .AsideMessage-message-div-style
{
    color: #ffffff;
}
</style>