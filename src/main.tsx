import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout'
import HomePg from './HomePg'
import GamesPg from './GamesPg'
import InfoPg from './InfoPg'

import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,

    children: [
      {
        path: "/",
        element: <HomePg/>
      },
      {
        path: "/games",
        element: <GamesPg/>
      },
      {
        path: "/games/:id",
        element: <InfoPg/>
      }
    ]
  }  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
