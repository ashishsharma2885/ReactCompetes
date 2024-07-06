import React from 'react'

function Card({values, handleClick, index}) {
  const {name, image, profession, friends} = values
  return (
    <div className='w-52 bg-white rounded overflow-hidden'>
      <div className='w-full h-42 bg-sky-200'>
        <img className='w-full h-full object-cover object-[center_top' src={image} alt="" />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-sl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button onClick={()=>handleClick(index)} className='mt-4 px-3 py-1 text-xs text-white bg-blue-500
        font-semibold rounded-md'>{friends === true ?
        "Friends" : "Add Friend"}</button>
      </div>
    </div>
  )
}

export default Card



/* props use hote hai aapke components ko reusable banaane ke liye, consider karo aapke pass
ek button ha i and apko us button ko alag alag jagah dalna hai app mein toh app ek button component
banaaye and uska data hard coded karne ke jagah parent  component se send karde and child component par
use kar le
*/

/* humara data actually main app component mein hoga aur use props ke through pass karega cards mein, 
har card par ek add friend button hoga and humein add friend button par click hone par alert dena hai */