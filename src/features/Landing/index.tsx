import * as React from 'react'
import Main from 'components/Main'
import { useTranslation } from 'react-i18next'

const Landing: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Main>
      <React.Fragment>{t('common:yes')}</React.Fragment>
      <React.Fragment>{t('common:no')}</React.Fragment>
    </Main>
  )
}

export default Landing
