import React from 'react'

const Heading = ({ text }) => {
  return (
    <div className='flex items-center justify-start gap-4'>
      <div className='bg-secondary2 rounded h-[33px] w-[17px]'></div>
      <p className='text-secondary2 font-semibold'>{text}</p>
    </div>
  )
}

export default Heading
