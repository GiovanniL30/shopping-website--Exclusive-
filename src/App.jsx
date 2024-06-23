import React, { useEffect, useState } from 'react'
import MainLayout from './layout/MainLayout'
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom'
import { About, Contact, Cart, Home, Signup } from './pages'
import { loader as productsLoader } from './pages/Home'

const HomeLoading = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      await productsLoader()
      setLoading(false)
    }

    fetchProducts()
  }, [])

  if (loading) return <h1>Loading Products</h1>

  return <Home />
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route loader={productsLoader} index element={<HomeLoading />} />
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
