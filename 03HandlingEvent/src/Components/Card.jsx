import React from 'react'

function Card() {

    const data = [
        {name: "Mahiya Ve", description: "THe name of the card that will displayed"},
        {name: "Clam Down", description: "THe name of the card that will displayed"}
    ]

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center'>
    {data.map((item, index)=>(
        <div className='w-60 px-3 py-2 bg-zinc-100 rounded'>
        <h3 className='font-semibold text-xl'>{item.name}</h3>
        <p className='text-xs mt-2'>{item.description}</p>
        <button onClick={()=>{alert("hey")}} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded-md mt-3'>Download Now</button>
        </div>
    ))}
    </div>
  )
}

export default Card