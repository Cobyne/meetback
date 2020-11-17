import i18 from 'i18next'
import * as resources from 'locale'
import { initReactI18next } from 'react-i18next'
import { Language, supportedLocale } from './ordinal'
import { formatOrdinal } from './ordinal'

const getLng = () => {
  // Storage
  const storageLng = localStorage?.getItem('locale')
  if (storageLng) return storageLng

  // Browser if supported
  const browserLocale = navigator?.language || navigator?.languages?.[0]
  if (supportedLocale.includes(browserLocale as Language)) return browserLocale

  // Fallback
  return Language.en
}

void i18.use(initReactI18next).init({
  ns: ['common'],
  lng: getLng(),
  fallbackLng: Language.en,
  defaultNS: 'common',
  resources,
  interpolation: {
    format: (value, format, language) => {
      if (format === 'ordinal') return formatOrdinal(language as Language, value)
      return value
    },
  },
})

export default i18
