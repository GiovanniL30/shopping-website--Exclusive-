import React, { useEffect, useMemo, useState } from 'react'
import Heading from '../components/Heading'
import ProductCard from '../components/ProductCard'
import ProductsGrid from '../components/ProductsGrid'

const FlashSales = ({ products }) => {
  const flashSaleProducts = useMemo(() => {
    return products
      .filter((product) => {
        return product.discountPercentage !== 0
      })
      .sort((a, b) => a.discountPercentage - b.discountPercentage)
      .reverse()
  }, [products])

  return (
    <div className='max-container'>
      <Heading text="Today's" />

      <FlashSaleTimer />

      <div className='mt-7'>
        <ProductsGrid products={flashSaleProducts} />
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
