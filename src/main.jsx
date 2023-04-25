import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Canyon from './paginas/Canyon'
import Erro from './Components/ErroPg'
import Escocia from './paginas/Escocia'
import China from './paginas/China'
import Aruba from './paginas/Aruba'
import Home from './paginas/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/canyon',
        element: <Canyon />
      },
      {
        path: '/escocia',
        element: <Escocia />
      },
      {
        path: '/china',
        element: <China />
      },
      {
        path: '/aruba',
        element: <Aruba />
      }
      
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)