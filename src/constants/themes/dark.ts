import { DefaultTheme } from 'styled-components'
import { commonTheme } from './common'
import { colors } from '../colors'

export const dark: DefaultTheme = {
  ...commonTheme,
  background: colors.white,
  primary: colors.white,
}
