import useClipboard from 'vue-clipboard3'
import { Edit } from '@element-plus/icons-vue'
export default
{
    name: 'LinkCardTencentqq',
    components: { Edit },
    setup()
    {
        const { toClipboard } = useClipboard();
        const copy = async () => 
        {
            try
            {
                await toClipboard('3355905055')
                message.success('复制了QQ号');
            }
            catch (e){}
        }
        return
        {
            copy
        }
    },
    data()
    {
        return{
            MarkTencentqq: require('@/assets/images/logo/mark-d81e06.png')
        }
    }
}