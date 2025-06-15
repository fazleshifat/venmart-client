import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router'
import { RouterProvider } from 'react-router'
import AuthProvider from './AuthProvider/AuthProvider'
import RouteTitleUpdater from './components/RouteTitleUpdater'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {/* <RouteTitleUpdater></RouteTitleUpdater> */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
