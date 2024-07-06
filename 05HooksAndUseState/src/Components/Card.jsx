import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

/*
function Card() {
   
  const [val, setVal] = useState(false)
  return (
    <div>
       <h1>
        {val === false ? "BAHAR JAAO" : "MAT JAAO"}
       </h1>
       <button onClick={()=>setVal(()=>!val)} className='px-2 py-1 bg-blue-300'>Change</button>
    </div>
  )
}

export default Card
*/



function Card() {

   const [val, setVal] =  useState(false)
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className="w-60 h-32 bg-zinc-500 rounded-md flex overfloe-hidden">
            <img className={`shrink-0 ${val === false ? '-translate-x-[0%]' : "-translate-x-[100%] "} w-full h-full object-cover`} src='https://images.unsplash.com/photo-1715645971181-c7479b08604b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
            <img className='shrink-0 -translate-x-[0%]  w-full h-full object-cover' src='https://images.unsplash.com/photo-1713616467053-c88453ff8320?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
            <span onClick={()=>setVal(()=>!val)} className='w-10 h-10 flex items-center justify-center bg-[#dadada8b] rounded-full bg-zinc-200 absolute bottom-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <FaArrowRightLong size={".7em"}/>
            </span>
        </div>
    </div>
  )
}

export default Card
