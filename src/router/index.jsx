import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../pages/main'
import COMP from '../components'

const SomeComponent = React.lazy(() => import('../pages/about'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: (
          <Suspense fallback={COMP.Loading}>
            <SomeComponent />
          </Suspense>
        ),
      },
    ],
  },
])
export default router
