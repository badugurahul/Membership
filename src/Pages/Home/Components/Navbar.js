import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Navbar = () => {
   const Navigate = useNavigate()

   const localStoragedata = localStorage.getItem( 'email' );

   const handlelogout = () => {
      localStorage.clear()
      alert( 'You are successfully logout' )
      Navigate( '/' )
   }

   const emailfromlocalstorage = localStorage.getItem( "email" )
   return (
      <div className='w-full h-24  flex justify-between items-center border-b px-24 sticky top-0 z-50 bg-white'>
         <Link to={'/home'}>
            <h1 className='font-black text-[#AC397A] text-5xl hover:cursor-pointer'>MS</h1>
         </Link>
         <div className='flex gap-20  font-bold'>
            <Link to={'/home'} className='hover:text-pin'>Home</Link>
            <Link className='hover:text-pin' >About</Link>
            <Link to={'/t'} className='hover:text-pin'>Services</Link>
            {/* <Link to={'/t'} className='hover:text-pin'>Member</Link> */}
         </div>
         <div className='flex gap-10'>
            <h2>{emailfromlocalstorage}</h2>
            {/* {
               localStoragedata.length = 0( < Link to={'/'} className='px-8 py-2 bg-blue-500 text-white rounded-lg'><button>Login</button></Link> ) 
            } */}
            <button onClick={handlelogout} className='px-8 py-2 bg-pin text-white rounded-lg'>Logout</button>
         </div>
      </div >
   )
}

export default Navbar
