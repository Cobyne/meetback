import React, { createContext, useMemo, useState } from 'react'
import { dark } from 'constants/themes/dark'
import { light } from 'constants/themes/light'
import { DefaultTheme } from 'styled-components'

export interface ThemeControlProps {
  theme: DefaultTheme
  themeType?: Theme
  setTheme?: (theme: Theme) => void
}

interface Props {
  children: (props: ThemeControlProps) => JSX.Element
}
export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const themes = {
  [Theme.DARK]: dark,
  [Theme.LIGHT]: light,
}

export const ThemeControlContext = createContext({ theme: themes[Theme.DARK] })

const ThemeControl: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
  console.log({ theme })
  const providerProps = useMemo(
    (): ThemeControlProps => ({
      theme: themes[theme],
      themeType: theme,
      setTheme: (theme: Theme) => setTheme(theme),
    }),
    [theme],
  )

  return <ThemeControlContext.Provider value={providerProps}>{children(providerProps)}</ThemeControlContext.Provider>
}

export default ThemeControl
