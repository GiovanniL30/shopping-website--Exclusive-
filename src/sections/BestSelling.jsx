import React from 'react'
import Heading from '../components/Heading'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const BestSelling = () => {
  const bestSellingProducst = products.filter((product) => {
    return product.totalSold > 100
  })

  return (
    <div className='max-container'>
      <Heading text='This Month' />
      <h1 className='heading'>Best Selling Products</h1>

      <div className='mt-7'>
        <div className='flex flex-wrap justify-center gap-10 md:justify-start'>
          {bestSellingProducst.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                star={product.star}
                price={product.price}
                totalReview={product.totalReview}
                image={product.image}
                discount={
                  product.discountPercentage === 0
                    ? null
                    : product.discountPercentage
                }
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BestSelling
