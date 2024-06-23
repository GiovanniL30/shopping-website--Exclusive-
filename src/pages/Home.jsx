import React from 'react'
import {
  BestSelling,
  Category,
  ExploreProducts,
  FlashSales,
  HeroSection,
  NewArrival,
} from '../sections'

import { products } from '../data/products'
import { useLoaderData } from 'react-router-dom'

export function loader() {
  return products
}

const Home = () => {
  const allProducts = useLoaderData()

  return (
    <main>
      <section className='padding-t padding-x'>
        <HeroSection />
      </section>
      <section className='padding-t padding-x'>
        <FlashSales products={allProducts} />
      </section>
      <section className='padding-t padding-x'>
        <Category />
      </section>
      <section className='padding-t padding-x'>
        <BestSelling products={allProducts} />
      </section>
      <section className='padding-t padding-x'>
        <ExploreProducts products={allProducts} />
      </section>
      <section className='padding-t padding-x'>
        <NewArrival />
      </section>
    </main>
  )
}

export default Home
