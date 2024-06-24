import React from 'react'
import Heading from '../components/Heading'

import ProductsGrid from '../components/ProductsGrid'
const ExploreProducts = ({ products }) => {
  return (
    <div className='max-container'>
      <Heading text='Our Products' />
      <h1 className='heading'>Explore Our Products</h1>

      <div className='mt-7'>
        <ProductsGrid products={products} />
      </div>
    </div>
  )
}

export default ExploreProducts
