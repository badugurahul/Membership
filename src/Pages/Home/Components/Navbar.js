import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreData } from '../../../context/store'


const Navbar = () => {
   const Navigate = useNavigate()

   // const localStoragedata = localStorage.getItem( 'email' );

   const { cond, setCond } = useContext( StoreData )

   const handlelogout = () => {
      localStorage.clear();
      alert( 'You are successfully logout' )
      Navigate( '/' )
      setCond( false )
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
         <div className='flex items-center text-pin gap-10 cursor-default'>
            <h2>{emailfromlocalstorage}</h2>
            {
               cond ?
                  <button onClick={handlelogout} className='px-8 py-2 bg-pin text-white rounded-lg'>Logout</button>
                  :
                  <Link to={'/'} className='px-8 py-2 bg-pin text-white rounded-lg'><button>Login</button></Link>
            }
         </div>
      </div >
   )
}

export default Navbar
