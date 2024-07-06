import React from 'react'

function Card() {
  return (
    <div className='w-52 h-[20vh] bg-sky-300 rounded-lg flex flex-col items-center p-2'>
      <div className='image w-[3vw] h-[3vw] rounded-full bg-blue-800 overflow-hidden'>
        <img className='w-full h-full object-cover' src='' alt='' />
      </div>
    </div>
  )
}

export default Card