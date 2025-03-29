import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import { HelmetProvider } from 'react-helmet-async'






createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>
  <RouterProvider router={routes}/>
  </HelmetProvider>
  </StrictMode>,
)
