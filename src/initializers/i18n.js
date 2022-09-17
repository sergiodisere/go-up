import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import esTranslations from '../locales/es/translation'

const resources = {
  es: { translation: esTranslations }
}

const userLang = navigator.language || navigator.userLang 
const defaultLang = userLang.substring(0,2)

export const initialize = () => i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLang,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  })

initialize()

export default i18n
