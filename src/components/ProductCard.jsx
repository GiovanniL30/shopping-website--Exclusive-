import React from 'react'
import Tag from './Tag'
import heart from '../../public/assets/heart small.png'
import eye from '../../public/assets/Quick View.png'
import threestar from '../../public/assets/3star.png'
import fourhalfstar from '../../public/assets/4.5star.png'
import fourstar from '../../public/assets/4star.png'
import fivestar from '../../public/assets/5star.png'

const ProductCard = ({
  color,
  name,
  star,
  price,
  totalReview,
  discount,
  image,
}) => {
  function starString() {
    switch (star) {
      case 3:
        return threestar
      case 4.5:
        return fourhalfstar
      case 4:
        return fourstar
      case 5:
        return fivestar
      default:
        return fivestar
    }
  }

  const computedPrice = discount
    ? (price * (1 - discount / 100)).toFixed(2)
    : price.toFixed(2)

  return (
    <div className='flex flex-col gap-2  w-[250px]'>
      <div className=' relative w-full bg-gray-100 rounded flex justify-center items-center py-10'>
        <img
          className='object-fill'
          src={'../../public/productImage/bag.png'}
          alt='bag'
        />
        {discount && <Tag color={color} text={`-${discount}%`} />}

        <div className='icon-button'>
          <img src={heart} alt='heart' />
        </div>
        <div className='mt-10 icon-button'>
          <img src={eye} alt='eye' />
        </div>
      </div>
      <h1 className='font-semibold'>{name}</h1>
      <div className='flex gap-3 font-semibold text-secondary2'>
        ${computedPrice}
        {discount && (
          <div className='relative text-black opacity-50'>
            ${price}
            <div className='absolute w-full h-[1px] bg-black top-1/2'></div>
          </div>
        )}
      </div>
      <div className='flex gap-3'>
        <img src={starString()} alt={starString()} />
        <p className='opacity-50 text-sm'>({totalReview})</p>
      </div>
    </div>
  )
}

export default ProductCard
