import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const FlashSales = () => {
  const flashSaleProducts = products
    .filter((product) => {
      return product.discountPercentage !== 0
    })
    .sort((a, b) => a.discountPercentage - b.discountPercentage)
    .reverse()

  return (
    <div className='max-container'>
      <Heading text="Today's" />

      {
        //flash sale
      }

      <FlashSaleTimer />

      <div className='mt-7'>
        <div className='flex flex-wrap justify-center gap-10 md:justify-start'>
          {flashSaleProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                star={product.star}
                price={product.price}
                totalReview={product.totalReview}
                image={product.image}
                discount={product.discountPercentage}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FlashSales

function FlashSaleTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-06-17') - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [time, setTime] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const addLeadingZero = (value) => {
    if (value < 10) {
      return `0${value}`
    }
    return value
  }

  return (
    <div className='flex flex-col items-start gap-5 mt-5 md:items-center md:flex-row w-full md:gap-20'>
      <h1 className='font-bold text-3xl flex-shrink-0'>Flash Sales</h1>
      <div className='flex gap-3 items-center'>
        <div>
          <p className='text-[0.8em] font-semibold'>Days</p>
          <h1 className='font-bold text-3xl'>{addLeadingZero(time.days)}</h1>
        </div>
        <div className='font-bold text-secondary2'>:</div>
        <div>
          <p className='text-[0.8em] font-semibold'>Hours</p>
          <h1 className='font-bold text-3xl'>{addLeadingZero(time.hours)}</h1>
        </div>
        <div className='font-bold text-secondary2'>:</div>
        <div>
          <p className='text-[0.8em] font-semibold'>Minutes</p>
          <h1 className='font-bold text-3xl'>{addLeadingZero(time.minutes)}</h1>
        </div>
        <div className='font-bold text-secondary2'>:</div>
        <div>
          <p className='text-[0.8em] font-semibold'>Seconds</p>
          <h1 className='font-bold text-3xl'>{addLeadingZero(time.seconds)}</h1>
        </div>
      </div>
    </div>
  )
}
