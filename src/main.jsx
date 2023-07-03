import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import { RouterProvider } from 'react-router-dom'
import router from './Routes'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className=''>
   <RouterProvider router={router} />
   {/* <App></App> */}
   </div>
  </React.StrictMode>,
)
