import React from 'react'
import {
  BestSelling,
  Category,
  ExploreProducts,
  FlashSales,
  HeroSection,
  NewArrival,
} from '../sections'

const Home = () => {
  return (
    <main>
      <section className='padding-t padding-x'>
        <HeroSection />
      </section>
      <section className='padding-t padding-x'>
        <FlashSales />
      </section>
      <section className='padding-t padding-x'>
        <Category />
      </section>
      <section className='padding-t padding-x'>
        <BestSelling />
      </section>
      <section className='padding-t padding-x'>
        <ExploreProducts />
      </section>
      <section className='padding-t padding-x'>
        <NewArrival />
      </section>
    </main>
  )
}

export default Home
