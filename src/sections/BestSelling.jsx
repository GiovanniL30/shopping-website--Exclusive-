import React, { useMemo } from 'react'
import Heading from '../components/Heading'
import ProductsGrid from '../components/ProductsGrid'

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
        <ProductsGrid products={bestSellingProducst} />
      </div>
    </div>
  )
}

export default BestSelling
