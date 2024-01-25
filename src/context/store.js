import React, { createContext, useState } from 'react'



export const StoreData = createContext()



export const ContextStore = ( { children } ) => {

   const initialdata = {
      name: "",
      Role: "",
      Mobilenumber: "",
      email: "",
      website: ""
   }

   const [cond, setCond] = useState( false )
   const [data, setData] = useState( initialdata )

   return ( <StoreData.Provider value={{ data, setData, cond, setCond }}>
      {children}
   </StoreData.Provider> )


} 