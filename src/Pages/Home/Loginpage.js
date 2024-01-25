import React from "react"
import { useState } from "react"
// import Form from 'react-bootstrap/Form';
import './loginform.css'
import { useNavigate } from "react-router-dom";
import logoimg from '../../assets/2919974.jpg'
import Loading from "./Loading";

const LoginPage = () => {
   const [email, setemail] = useState( "" )
   const [password, setPassword] = useState( "" )
   const navigate = useNavigate()
   const handleSubmit = ( e ) => {
      e.preventDefault()
      JSON.stringify( localStorage.setItem( "email", email ) )
      JSON.stringify( localStorage.setItem( "password", password ) )
      alert( 'loginsuccessfully' )
      setemail( "" )
      setPassword( "" )
      navigate( "/home" )
   }

   return (
      <>
         <div className="w-full h-[calc(100vh-6rem)] flex justify-center items-center ">
            <div className="flex items-center gap-24">
               <div className="w-[800px]">
                  <img src={logoimg} alt='lg' />
               </div>
               <div className="w-[500px] h-fit border rounded-lg shadow-2xl px-20 py-24 space-y-8">
                  <h1 className="text-2xl">Login</h1>
                  <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-8 ">
                     <div class="relative w-full min-w-[200px] h-10">
                        <input
                           class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                           placeholder="" value={email} onChange={( e ) => setemail( e.target.value )} required /><label
                              class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:border-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Email
                        </label>
                     </div>
                     {/* <input placeholder="Enter your email" value={email} type="email" /> */}

                     <div class="relative w-full min-w-[200px] h-10">
                        <input
                           class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                           placeholder=" " value={password} type="password" onChange={( e ) => setPassword( e.target.value )} required /><label
                              class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:border-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Password
                        </label>
                     </div>
                     {/* <input placeholder="Enter your Password" value={password} type="password" onChange={( e ) => setPassword( e.target.value )} required /> */}
                     <button type="submit" className='px-8 py-2 bg-blue-500 text-white rounded-lg'>Login</button>
                  </form>
               </div>
            </div>
         </div>

      </>



   )
}

export default LoginPage

