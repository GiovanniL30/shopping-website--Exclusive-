import React, { useMemo } from 'react'
import Heading from '../components/Heading'
import ProductCard from '../components/ProductCard'

const BestSelling = ({ products }) => {
  const bestSellingProducst = useMemo(() => {
    return products.filter((product) => {
      return product.totalSold > 100
    })
  }, [products])

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
