import * as React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import Routes from 'constants/routes'

const Landing = React.lazy(() => import('features/Landing'))
const UIKit = React.lazy(() => import('features/UIKit'))

const Public: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path={Routes.LANDING} component={Landing} exact />
        <Route path={Routes.UIKit} component={UIKit} />
        <Redirect to={Routes.UIKit} />
      </Switch>
    </>
  )
}

export default Public
