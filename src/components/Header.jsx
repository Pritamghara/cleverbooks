import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg'>
      <div className='p-2 md:px-20 flex justify-between items-center mx-auto'>
        <Link to='/'>
        
        <span className='text-4xl font-bold text-white'>CleverBooks</span>
        </Link>

        {/* Central navigation with links */}
        <nav className='text-white'>
          <ul className='flex gap-8 text-xl'>
            <li className='hover:text-orange-300 transition duration-300'>Product</li>
            <li className='hover:text-orange-300 transition duration-300'>Pricing</li>
            <li className='hover:text-orange-300 transition duration-300'>Industry</li>
            <li className='hover:text-orange-300 transition duration-300'>Customer Services</li>
            <li className='hover:text-orange-300 transition duration-300'>About</li>
            <li className='hover:text-orange-300 transition duration-300'>Blog</li>
          </ul>
        </nav>

        {/* Login link and Talk to us button */}
        <div className='flex gap-6 items-center'>
          <Link to="/login">
            <h2 className=' font-semibold text-xl bg-gradient-to-br from-red-300 to-purple-800 bg-clip-text text-transparent transition delay-800 hover:text-white'>
              Login
            </h2>
          </Link>

          <button className='p-3 rounded-full overflow-hidden text-white  hover:text-black  font-semibold'>
            <div className='w-32 h-16 flex items-center justify-center bg-gradient-to-br from-red-300 to-purple-800 hover:bg-gradient-to-tr hover:from-purple-800 hover:to-red-300 rounded-full'>
              <span className=' text-xl'>
                Talk to us
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
