import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../../public/assets/Side Image.png'

const Signup = () => {
  return (
    <div className='relative lg:h-[900px]'>
      <div className='padding'>
        <div className='max-container flex lg:justify-end'>
          <div className='z-20 w-full flex flex-col lg:w-1/2'>
            <h1 className='text-4xl font-semibold tracking-wide'>
              Create an account
            </h1>
            <p>Enter your details below</p>
            <div className='flex flex-col'>
              <div className='relative w-full'>
                <label
                  htmlFor='name'
                  className='absolute bottom-2 text-slate-300'
                >
                  Name
                </label>
                <input
                  className='w-full border-b-[1px] border-b-slate-300 outline-none pb-2'
                  type='text'
                  id='name'
                />
              </div>
            </div>

            <div>
              <button>Create Account</button>
              <button>Sign up with Google</button>
            </div>

            <p>
              Already have account? <NavLink>Log in</NavLink>
            </p>
          </div>
        </div>
      </div>
      <div className='hidden h-[700px] lg:block  lg:w-[900px]  absolute left-0 top-10'>
        <img
          src={image}
          className='w-full object-fill h-full'
          alt='Side Image'
        />
      </div>
    </div>
  )
}

export default Signup
