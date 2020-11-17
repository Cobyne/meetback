import { ColorTint, ColorType } from '../@typings'

export const commonTheme = {
  primaryText: 'white',
  disabledText: 'grey',
  lightText: 'white',
  disabled: 'green',
  surface: {
    1: '#2D2929',
    2: '#f4f4f4',
  },
  layout: {
    roudness: 12,
    navigationHeight: 44,
  },
  statusColors: {
    [ColorType.PRIMARY]: {
      [ColorTint.DEFAULT]: 'black',
      [ColorTint.LIGHT]: 'black',
      [ColorTint.DARK]: 'black',
    },
    [ColorType.FAILURE]: {
      [ColorTint.DEFAULT]: 'red',
      [ColorTint.LIGHT]: 'red',
      [ColorTint.DARK]: 'red',
    },
    [ColorType.SUCCESS]: {
      [ColorTint.DEFAULT]: 'green',
      [ColorTint.LIGHT]: 'green',
      [ColorTint.DARK]: 'green',
    },
  },
}
