import React from 'react'
import { RiTodoLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineContainer } from "react-icons/ai";
import { MdStorage } from "react-icons/md";
const KeyProblemsSolve = () => {
  return (
    // main
  <div className='p-32'>

    <div className=' flex flex-col items-center gap-10'>
      {/* text */}
      <span className='text-5xl font-extrabold'>Four key questions answered by Cleverbooks</span>

      {/* issues */}


      <div className='flex gap-12 w-full mx-auto p-16'>
  <div className='flex flex-col gap-6 w-25 p-10 bg-purple-100 rounded-3xl pr-5'>
    <RiTodoLine className="h-20 w-20" />
    <h1 className='font-semibold text-4xl'>Find Your Next Read</h1>
    <span className='text-xl leading-normal mr-5'>Discover new books tailored to your interests. Get personalized recommendations and explore a vast collection of titles across genres.</span>
  </div>
  <div className='flex flex-col gap-6 w-25 p-10 bg-purple-100 rounded-3xl pr-5'>
    <MdOutlineShoppingBag className='h-20 w-20'/>
    <h1 className='font-semibold text-4xl'>Order with Ease</h1>
    <span className='text-xl leading-normal mr-5'>Browse and purchase books effortlessly. Enjoy a seamless ordering experience with secure transactions and fast delivery.</span>
  </div>
  <div className='flex flex-col gap-6 w-25 p-6 bg-purple-100 rounded-3xl pr-5'>
    <AiOutlineContainer className='h-20 w-20'/>
    <h1 className='font-semibold text-4xl'>Stay Updated</h1>
    <span className='text-xl leading-normal mr-5'>Receive notifications about new releases, promotions, and events. Stay connected with the latest updates from your favorite authors and publishers.</span>
  </div>
  <div className='flex flex-col gap-6 w-25 p-6 bg-purple-100 rounded-3xl pr-5'>
    <MdStorage className='h-20 w-20'/>
    <h1 className='font-semibold text-4xl'>Manage Your Library</h1>
    <span className='text-xl leading-normal mr-5'>Organize and track your book collection effortlessly. Keep tabs on your reading progress, reviews, and wish lists with our intuitive library management tools.</span>
  </div>
</div>





    </div>



  </div>

  )
   
}

export default KeyProblemsSolve