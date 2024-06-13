import React from 'react'
import qrCode from '../../public/assets/Qr Code.png'
import googlePlay from '../../public/assets/googleplay.png'
import appStore from '../../public/assets/AppStore.png'
import facebook from '../../public/assets/Icon-Facebook.png'
import linkedin from '../../public/assets/Icon-Linkedin.png'
import twitter from '../../public/assets/Icon-Twitter.png'
import instagram from '../../public/assets/icon-instagram.png'
import send from '../../public/assets/icon-send.png'

const Footer = () => {
  return (
    <footer className='gap-10 lg:gap-0 max-container text-white flex flex-col  lg:flex-row justify-between tracking-wide'>
      <div>
        <h1 className='text-2xl font-semibold'>Exclusive</h1>
        <p className='my-5'>Subscribe</p>
        <p className='font-thin text-[0.8em] mb-2'>
          Get 10% off your first order
        </p>
        <div className='relative flex-none w-[190px]'>
          <input
            className='w-full outline-none border-[1px] bg-transparent rounded pl-2 py-2'
            type='text'
            placeholder='Enter your email'
          />
          <img
            className='w-[20px] h-[20px] absolute top-1/2 bottom-1/2 translate-y-[-50%] right-2'
            src={send}
            alt='send'
          />
        </div>
      </div>
      <div>
        <h2 className='text-[1.2em]'>Support</h2>
        <p className='text'>Monglo, Bayabas, Sablan, Benguet</p>
        <p className='text'>giovannileo100@gmail.com</p>
        <p className='text'>09286040455</p>
      </div>
      <div>
        <h2 className='text-[1.2em]'>Quick Link</h2>
        <p className='text'>Privacy Policy</p>
        <p className='text'>Terms Of Use</p>
        <p className='text'>FAQ</p>
        <p className='text'>Contact</p>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-[1.2em]'>Download App</h2>
        <p className='mt-4 mb-2 text-[0.75em] text-gray-50 font-thin'>
          Save $3 with the App New User Only
        </p>
        <div className='flex gap-2'>
          <div>
            <img src={qrCode} alt='qrCode' />
          </div>
          <div className='flex flex-col h-full items-center justify-center gap-2'>
            <img src={googlePlay} alt='google play' />
            <img src={appStore} alt='app store' />
          </div>
        </div>
        <div className='flex justify-between w-[200px] mt-3'>
          <img className='w-[20px] h-[20px]' src={facebook} alt='facebook' />
          <img className='w-[20px] h-[20px]' src={twitter} alt='twitter' />
          <img className='w-[20px] h-[20px]' src={instagram} alt='instagram' />
          <img className='w-[20px] h-[20px]' src={linkedin} alt='linkedin' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
