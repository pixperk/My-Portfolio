import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout/>}>
      <Route path= '' element={<Home/>}/>
      <Route path= 'about' element={<About/>}/>
      <Route path = 'projects' element={<Projects/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
