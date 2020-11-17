export enum Language {
  'en' = 'en',
}

export const supportedLocale: Language[] = [Language.en]

interface Ordinal {
  one: string
  two: string
  few: string
  many: string
  zero: string
  other: string
}

type Ordinals = Record<Language, Ordinal>

const ordinals: Ordinals = {
  [Language.en]: {
    one: 'st',
    two: 'nd',
    few: 'rd',
    many: 'th',
    zero: 'th',
    other: 'th',
  },
}

export const formatOrdinal = (language: Language, value: number): string => {
  const dictionary = new Intl.PluralRules(language, { type: 'ordinal' })

  const ordinal = dictionary.select(value)

  return `${value}${ordinals[language][ordinal]}`
}
