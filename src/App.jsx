import React from 'react'
import MainLayout from './layout/MainLayout'
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom'
import { About, Contact, Cart, Home, Signup } from './pages'
import { loader as productsLoader } from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route loader={productsLoader} index element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='cart' element={<Cart />} />
      <Route path='signup' element={<Signup />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
