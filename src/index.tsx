import 'constants/style.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { I18nextProvider } from 'react-i18next'
import i18n from 'utils/locale'

import ThemeControl from 'hooks/ThemeControl'
import GlobalStyle from 'constants/globalStyle'
import App from './App'

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <ThemeControl>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </>
        </ThemeProvider>
      )}
    </ThemeControl>
  </I18nextProvider>,
  document.getElementById('root'),
)
