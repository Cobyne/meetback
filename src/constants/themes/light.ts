import { DefaultTheme } from 'styled-components'
import { colors } from '../colors'
import { commonTheme } from './common'

export const light: DefaultTheme = {
  ...commonTheme,
  background: colors.white,
  primary: colors.white,
}
