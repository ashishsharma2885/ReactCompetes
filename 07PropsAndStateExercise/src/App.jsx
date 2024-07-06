import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'


function App() {

const data = [
  {image: "https://images.unsplash.com/photo-1716691731823-5f382e879e82?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Challenger", artist: "Ashish", added: false},
  {image: "https://plus.unsplash.com/premium_photo-1716484124964-3480ac617f9c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "One Day", artist: "Abhishek", added: false},
  {image: "https://images.unsplash.com/photo-1716872491847-03c73619a25d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "One Love", artist: "Arabh", added: false},
  {image: "https://images.unsplash.com/photo-1716677951293-853a3948f633?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Together", artist: "Pooja", added: false},
]

const [songData, setSongData] = useState(data)
const handleClick = (index)=>{
 setSongData((prev)=>{
  return prev.map((item, itemindex)=>{
    if(itemindex === index) return {...item, added: !itemindex.added}
    return item;
  })
 })
}

 return (
    <>
    <div className='w-full h-screen bg-zinc-300'>
      <Navbar data={songData}/>
      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
     {songData.map((obj, index)=>(
      <Card data={obj} handleClick={handleClick} index={index} key={index} />
     ))}
      </div>
    </div>
    </>
  )
}

export default App
