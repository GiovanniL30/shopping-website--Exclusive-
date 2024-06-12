import React from 'react'
import MainLayout from './layout/MainLayout'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { About, Contact, Cart, Home, Signup } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='signup' element={<Signup />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
