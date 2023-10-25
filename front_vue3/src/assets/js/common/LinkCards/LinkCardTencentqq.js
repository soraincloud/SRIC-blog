import Clipboard from 'clipboard';
import i18n from '@/language'

const { t } = i18n.global

export default
{
    name: 'LinkCardTencentqq',
    data()
    {
        return{
            MarkTencentqq: require('@/assets/webp/logo/mark-d81e06.webp')
        }
    },
    methods:
    {
        copy()
        {
            var clipboard = new Clipboard('.LinkCard-link-button-style')
            clipboard.on('success', e => {
                this.$message.success({message: t('copy.success'),})
                // 释放内存
                clipboard.destroy()
              })
              clipboard.on('error', e => {
                this.$message.error({message: t('copy.error'),})
                // 释放内存
                clipboard.destroy()
              })
        }
    }
}