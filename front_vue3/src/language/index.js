import { createI18n } from 'vue-i18n'

import zh from '@/language/zh.js'
import en from '@/language/en.js'
import warma from '@/language/warma.js'

const messages =
{
    zh,
    en,
    warma,
}

const i18n = createI18n
({
    messages,
    locale: 'zh',
})

export default i18n