import React from 'react'
import logo from '../../public/assets/Logo.png'
import searchIcon from '../../public/assets/search.png'
import whishlist from '../../public/assets/Wishlist.png'
import cartIcon from '../../public/assets/Cart.png'
import { navlinks } from '../constants'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  textDecoration: 'underline',
}

const Nav = () => {
  return (
    <nav className='max-container flex items-center w-full overflow-hidden'>
      <div className='flex-shrink-0'>
        <img src={logo} alt='Logo' />
      </div>
      <div className=' lg:hidden cursor-pointer realative w-[20px] h-[20px] flex flex-col gap-1 justify-center ml-auto'>
        <span className='bg-black w-full h-[3px] rounded-full'></span>
        <span className='bg-black w-full h-[3px] rounded-full'></span>
        <span className='bg-black w-full h-[3px] rounded-full'></span>
      </div>
      <div className='lg:flex items-center flex-grow hidden'>
        <ul className='mx-auto flex gap-10 flex-grow justify-center'>
          {navlinks.map((link) => {
            return (
              <li key={link.path}>
                <NavLink
                  className='hover:underline '
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to={link.path}
                >
                  {link.text}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className='ml-auto flex gap-6 items-center'>
          <div className='relative'>
            <input
              className='px-4 w-[250px] h-10 py-6 bg-gray-50 rounded outline-none'
              placeholder='What are you looking for?'
              type='text'
            />
            <img
              className='absolute right-[10px] top-[50%] bottom-[50%] translate-y-[-50%]'
              src={searchIcon}
              alt='search icon'
            />
          </div>
          <div className='w-[30px] h-[30px] cursor-pointer'>
            <img className='object-cover' src={whishlist} alt='whislist icon' />
          </div>
          <div className='w-[30px] h-[30px] cursor-pointer'>
            <img className='object-cover' src={cartIcon} alt='cart icon' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
