import React from 'react'
import { useNavigate } from 'react-router-dom'
import test from '../../../assets/ts.jpg'
import test1 from '../../../assets/ts2.jpg'
import test2 from '../../../assets/8621991_3966084.jpg'




const Content = () => {
   const Navigate = useNavigate()
   const handlemember = () => {
      Navigate( '/t' )
   }
   return (
      <div className='w-full flex flex-col items-center justify-center h-[calc(100vh-6rem)] px-24'>
         <div className='w-full flex items-center justify-between'>
            <div className='font-extrabold  flex flex-col gap-5 tracking-widest w-[800px] '>
               <h1 className=' text-9xl text-[#AC397A]  cursor-default'>Welcome to online Membership portal</h1>
               <i className='mt-10 text-xl'><span className='text-pin'>Download : </span>ID/Membership/Gatepass/certification Instantly</i>
            </div>
            <div>
               <div className="carousel carousel-center w-[800px] h-[600px] p-4 space-x-4  border">
                  <div className="carousel-item">
                     <img src={test1} className="rounded-box w-full h-full" alt='' />
                  </div>
                  <div className="carousel-item">
                     <img src={test} className="rounded-box w-full h-full" alt='' />
                  </div>

                  <div className="carousel-item">
                     <img src={test2} className="rounded-box w-full h-full" alt='' />
                  </div>

               </div>
               <p className='font-extrabold  mt-5'>Our Testomionals</p>
            </div>
         </div>
         <div className='mt-10'>
            <button onClick={handlemember} className='px-14 py-3  hover:scale-105 hover:bg-pin hover:text-white text-bold text-pin border-[2px] border-pin  shadow-2xl rounded-lg'>Our Products</button>
         </div>
      </div>
   )
}

export default Content
