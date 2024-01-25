import React, { useContext, useState } from 'react'
import './RegisterFormmember.css'
import { useNavigate } from 'react-router-dom'
import { StoreData } from '../../../context/store'

export const RegisterFormmember = () => {
  const navigate = useNavigate()
  const { data, setData } = useContext( StoreData )

  const handlechange = ( e ) => {
    const { name, value } = e.target;
    setData( { ...data, [name]: value } )
  }
  const [img, setImage] = useState( "" )
  const handleformsubmit = ( e ) => {
    e.preventDefault()
    localStorage.setItem( "data", JSON.stringify( data ) )
    setData( {
      name: "",
      Role: "",
      Mobilenumber: "",
      email: "",
      website: "",
      membertype: "",
    } )

    alert( "Your form has successfully submitted" )
    navigate( '/card' )
  }


  const getBase64 = ( file ) => {
    return new Promise( ( resolve, reject ) => {
      const reader = new FileReader()
      reader.onload = () => resolve( reader.result );
      reader.onabort = ( error ) => reject( error )
      reader.readAsDataURL( file )
    } )

  }

  const handleImg = ( e ) => {
    const file = e.target.files[0]
    getBase64( file ).then( base64 => {
      localStorage['img'] = base64
      console.debug( "filestore", base64 )
    } )
  }
  return (
    <div className='w-full flex justify-center items-center  h-[calc(100vh-6rem)] '>
      <div className='shadow-xl h-fit rounded-3xl p-20 space-y-8 mb-16'>
        <div>
          <div className=' text-4xl text-bold'>Membership Form</div>
          <p className='text-sm text-bold text-gray-600 mt-2'>Fill details to get a member ship card</p>
        </div>
        <form onSubmit={handleformsubmit} className='grid grid-cols-2 gap-10 place-content-center items-center '>
          {/* <input placeholder='Enter your name' type="text" value={data.name} name="name" onChange={handlechange} required />
          <input placeholder='Enter your Role' type="text" value={data.Role} name="Role" onChange={handlechange} required />
          <input placeholder='Enter your mobile' type="number" value={data.Mobilenumber} name="Mobilenumber" onChange={handlechange} required />
          <input placeholder='Enter your email' type="email" value={data.email} name="email" onChange={handlechange} required />
          <input placeholder='Enter your websitename' type="text" value={data.website} name="website" onChange={handlechange} required /> */}

          <div class="relative w-full min-w-[200px] h-10">
            <input
              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder="" type="text" value={data.name} name="name" onChange={handlechange} required /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900" >Enter your Full Name
            </label>
          </div>
          <div class="relative w-full min-w-[200px] h-10">
            <input
              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" " type="text" value={data.Role} name="Role" onChange={handlechange} required /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Enter your Role
            </label>
          </div>
          <div class="relative w-full min-w-[200px] h-10">
            <input
              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" " type="number" value={data.Mobilenumber} name="Mobilenumber" onChange={handlechange} required /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter your Mobile Number
            </label>
          </div>
          <div class="relative w-full min-w-[200px] h-10">
            <input
              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" " type="email" value={data.email} name="email" onChange={handlechange} required /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter your Email Id

            </label>
          </div>
          <div class="relative w-full min-w-[200px] h-10">
            <input
              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" " type="text" value={data.website} name="website" onChange={handlechange} required /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter Website url
            </label>
          </div>

          <div>
            <label for="membertype">Type of Member:</label>
            <select name="membertype" value={data.membertype} onChange={handlechange} required className='px-4 py-2'>
              <option className='hover:text-orange-400'>Diamond</option>
              <option className='px-3'>Silver</option>
              <option className='px-3'>Gold</option>
            </select>
          </div>
          {/* <input type="file" name='file' onChange={handleImg} value={img} id="formFile" /> */}
          <input type="file" className="file-input w-full max-w-xs" onChange={handleImg} value={img} id="formFile" />
          <button type='submit' className='w-[200px] px-8 py-2 bg-blue-500 text-white rounded-lg'>submit</button>
        </form>
      </div>

    </div>

  )
}


