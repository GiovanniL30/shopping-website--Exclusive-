import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <section className='padding-x min-w-full bg-black py-2'>
        <Header />
      </section>
      <section className='padding-x py-5 border-b-[1px]'>
        <Nav />
      </section>
      <main className='flex-grow'>
        <Outlet />
      </main>
      <section className='padding-t bg-black '>
        <Footer />
        <div className='sm:mt-24 mt-12  border-t-[0.7px] pt-2 border-white opacity-40'>
          <p className='text-white  text-center font-thin'>
            &copy; Copyright Giovanni 2024. All right reserved
          </p>
        </div>
      </section>
    </main>
  )
}

export default MainLayout
