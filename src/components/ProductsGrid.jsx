import React from 'react'
import ProductCard from './ProductCard'

const ProductsGrid = ({ products }) => {
  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {products.map((product) => {
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
  )
}

export default ProductsGrid
