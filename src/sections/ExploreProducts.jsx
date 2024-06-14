import React from 'react'
import Heading from '../components/Heading'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
const ExploreProducts = () => {
  return (
    <div className='max-container'>
      <Heading text='Our Products' />
      <h1 className='heading'>Explore Our Products</h1>

      <div className='mt-7'>
        <div className='flex flex-wrap justify-center gap-10 md:justify-start'>
          {products.map((product) => {
            return (
              <ProductCard
                color='button1'
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

export default ExploreProducts
