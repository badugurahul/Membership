import React from 'react'
import { useNavigate } from 'react-router-dom'
// import './content.css'
import test from '../../../assets/ts.jpg'
import test1 from '../../../assets/ts2.jpg'



const Content = () => {
   const Navigate = useNavigate()
   const handlemember = () => {
      Navigate( '/member' )
   }
   return (
      <div className='w-full flex flex-col items-center justify-center h-[calc(100vh-6rem)] px-24'>
         <div className='w-full flex items-center justify-between'>
            <div className='font-extrabold  tracking-widest w-[800px]'>
               <h1 className='text-gray-700 text-9xl'>Welcome to online Membership portal</h1>
               <p className='mt-10'>Make ID card or membership Instantly</p>
            </div>
            <div>

               <div className="carousel carousel-center w-[600px] bg-neutral-500 h-[600px] p-4 space-x-4 rounded-box border">
                  <div className="carousel-item">
                     <img src={test1} className="rounded-box w-full h-full" alt='' />
                  </div>
                  <div className="carousel-item">
                     <img src={test} className="rounded-box w-full h-full" alt='' />
                  </div>

               </div>
               <p className='font-extrabold  mt-5'>Our Testomionals</p>
            </div>
         </div>
         <div className=''>
            <button onClick={handlemember} className='px-14 py-3 text-xl hover:scale-105 bg-blue-500 text-white rounded-lg'>Be a Member</button>
         </div>
      </div>
   )
}

export default Content
