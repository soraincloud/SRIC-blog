import { createI18n } from 'vue-i18n'

import zh from '@/language/zh.js'
import en from '@/language/en.js'

const messages =
{
    zh,
    en,
}

const i18n = createI18n
({
    messages,
    locale: 'zh',
})

export default i18n