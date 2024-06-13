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
      <section className='padding'>
        <HeroSection />
      </section>
      <section className='padding'>
        <FlashSales />
      </section>
      <section className='padding'>
        <Category />
      </section>
      <section className='padding'>
        <BestSelling />
      </section>
      <section className='padding'>
        <ExploreProducts />
      </section>
      <section className='padding'>
        <NewArrival />
      </section>
    </main>
  )
}

export default Home
