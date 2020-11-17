import 'styled-components'
import { ColorTint, ColorType } from './@typings'

type StatusColors = {
  [key in ColorType]: {
    [key in ColorTint]: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    primary: string
    surface: {
      1: string
      2: string
    }
    layout: {
      roudness: number
      navigationHeight: number
    }
    disabled: string
    primaryText: string
    disabledText: string
    lightText: string
    statusColors: StatusColors
  }
}
