import React, { useState } from 'react'
import Heading from '../components/Heading'
import ProductCard from '../components/ProductCard'

const FlashSales = () => {
  return (
    <div className='max-container'>
      <Heading text="Today's" />
      <ProductCard
        color='secondary2'
        name='Bag'
        star={3}
        price={111}
        totalReview={65}
        discount={10}
        image
      />

      <div className='flex gap-5  mt-5 items-center w-full md:gap-20'>
        <h1 className='font-bold text-3xl flex-shrink-0'>Flash Sales</h1>
        <div className='flex gap-3 items-center'>
          <div>
            <p className='text-[0.8em]  font-semibold'>Days</p>
            <h1 className='font-bold text-3xl'>03</h1>
          </div>
          <div className='font-bold text-secondary2'>:</div>
          <div>
            <p className='text-[0.8em] font-semibold'>Hours</p>
            <h1 className='font-bold text-3xl'>23</h1>
          </div>
          <div className='font-bold text-secondary2'>:</div>
          <div>
            <p className='text-[0.8em]  font-semibold'>Minutes</p>
            <h1 className='font-bold text-3xl'>19</h1>
          </div>
          <div className='font-bold text-secondary2'>:</div>
          <div>
            <p className='text-[0.8em]  font-semibold'>Seconds</p>
            <h1 className='font-bold text-3xl'>56</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashSales
