import * as React from 'react'

const Public = React.lazy(() => import('./routes/Public'))

const App: React.FC = () => {
  return (
    <React.Suspense fallback={null}>
      <Public />
    </React.Suspense>
  )
}

export default React.memo(App)
