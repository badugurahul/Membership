import React from 'react'

import certi from '../../../assets/cert.jpg'
import idcard from '../../../assets/Screenshot 2024-01-25 215950.png';
import { useNavigate } from 'react-router-dom'

const Typesofmembership = () => {
   const Navigate = useNavigate()
   const handleTemplate = ( _type ) => {
      if ( _type === 'ID' ) {
         Navigate( '/member' )
      }
   }
   return (
      <div className='w-full h-full px-24 pt-4 pb-4'>
         <div className='text-2xl text-gray-600 text-center'>Our Services Instant ID/Certification/Membership/Gate pass</div>
         <div className='w-full grid grid-cols-2 gap-10'>
            <div className="p-4 bg-base-100 shadow-xl">
               <div className=''>
                  <figure className="px-10 pt-10">
                     <img src={certi} alt="Shoes" className="rounded-xl w-full h-full" />
                  </figure>
               </div>

               <div className="">
                  <h2 className="card-title text-bold text-2xl pt-5 text-pin">Online Certification</h2>
                  <p className='text-bold pt-3 '>Note : This is used for only Test purpose.</p>
                  <div className="card-actions pt-3">
                     <button className="btn px-8 py-3 bg-pin rounded-lg text-white">Use Template</button>
                  </div>
               </div>
            </div>

            <div className="card   p-4 bg-base-100 shadow-xl">
               <div className=''>
                  <figure className="px-10 pt-10">
                     <img src={idcard} alt="Shoes" className="rounded-xl" />
                  </figure>
               </div>

               <div className="card-body">
                  <h2 className="card-title text-bold text-2xl pt-5 text-pin">Online Certification</h2>
                  <p className='text-bold pt-3 '>Note : This is used for only Test purpose.</p>
                  <div className="card-actions pt-3">
                     <button className="btn px-8 py-3 bg-pin rounded-lg text-white" onClick={( e ) => handleTemplate( 'ID' )}>Use Template</button>
                  </div>
               </div>
            </div>
         </div>


      </div>
   )
}

export default Typesofmembership