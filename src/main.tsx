import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Games from './components/games'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>
  },
  {
    path: "/games",
    element: <Games/>
  },
  {
    path: "/games/:id",
    element: <div>Home Page</div>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
