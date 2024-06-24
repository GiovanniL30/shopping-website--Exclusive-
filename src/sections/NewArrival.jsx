import React from 'react'
import psp from '../../public/assets/playStation.png'
import perfume from '../../public/assets/perfume.png'
import speaker from '../../public/assets/speaker.png'
import girl from '../../public/assets/girl.png'
import delivery from '../../public/assets/iconDelivery.png'
import money from '../../public/assets/iconMoneyBack.png'
import services from '../../public/assets/iconServices.png'
import Heading from '../components/Heading'

const NewArrival = () => {
  return (
    <div className='max-container'>
      <Heading text='Featured' />
      <h1 className='heading'>New Arrival</h1>
      <div className='mt-7 grid gap-5 lg:grid-cols-1 lg:grid-rows-2 lg:max-h-[750px]'>
        <div className='w-full  col-span-4 row-span-1 relative lg:col-start-2 '>
          <Content
            heading="Women's Collection"
            text='Featured woman collections that give you another vibe.'
            img={girl}
          />
        </div>
        <div className='w-full col-span-2 row-start-2  row-span-2 relative lg:row-start-1 lg:col-span-1'>
          <Content
            heading='PlayStation 5'
            text='Black and White version of the PS5 coming out on sale.'
            img={psp}
          />
        </div>
        <div className='w-full  col-span-2 row-span-1 relative lg:row-start-2'>
          <Content
            heading='Perfume'
            text='GUCCI INTENSE OUD EDP'
            img={perfume}
          />
        </div>
        <div className='w-full  col-span-2 row-span-1 relative lg:row-start-2'>
          <Content
            heading='Speakers'
            text='Amazon wirelss speakers'
            img={speaker}
          />
        </div>
      </div>

      <div className='my-20 flex flex-col gap-10 lg:flex-row lg:justify-center lg:my-40 lg:gap-40'>
        <Icons
          heading='Free and fast delivery'
          text='Free delivery fro all orders over $140'
          img={delivery}
        />
        <Icons
          heading='24/7 Customer Service'
          text='Friendly 24/7 customer support'
          img={services}
        />
        <Icons
          heading='Money Back Guarantee'
          text='We return money within 30 days'
          img={money}
        />
      </div>
    </div>
  )
}

export default NewArrival

function Content({ heading, text, img }) {
  return (
    <>
      <img className='w-full h-full' src={img} alt={img} />
      <div className='absolute bottom-5 left-5 text-white flex flex-col items-start gap-3'>
        <h1 className='font-bold text-xl lg:text-2xl'>{heading}</h1>
        <p className='font-extralight text-[0.9em] lg:text-lg'>{text}</p>
        <button className='underline hover:text-primary1 ease-in-out duration-200'>
          Shop Now
        </button>
      </div>
    </>
  )
}

function Icons({ heading, text, img }) {
  return (
    <div className='flex flex-col items-center gap-3'>
      <img className='w-[60px]' src={img} alt='delivery' />
      <div className='flex flex-col items-center'>
        <h1 className='font-bold uppercase'>{heading}</h1>
        <p className='text-[.9em]'>{text}</p>
      </div>
    </div>
  )
}
