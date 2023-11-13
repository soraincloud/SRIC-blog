import { createI18n } from 'vue-i18n/index.mjs'

import zh from '@/language/zh.js'
import en from '@/language/en.js'
import warma from '@/language/warma.js'


if(localStorage.getItem('language') == null)
{
  localStorage.setItem('language','zh')
}

const messages =
{
    zh,
    en,
    warma,
}

const i18n = createI18n
({
    messages,
    locale: localStorage.getItem('language'),
    globalInjection: true,
})

export default i18n