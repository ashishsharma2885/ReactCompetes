import React, { useState } from "react"
import Card from "./Components/Card"
function App(){

  const data = [
    {name: "Ashish", profession: "Painter", image: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Amit", profession: "Artist", image: "https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  friends: false},
    {name: "Rahul", profession: "Thalua", image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  friends: false},
    {name: "Sumit", profession: "Coder", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  friends: false},
  ];

  const [realdata, setRealData] = useState(data)
  const handleFriendsButton = (cardindex) => {
    setRealData((previous)=>{
      return previous.map((item, index)=>{
        if(index === cardindex){
          return {...item, friends: !item.friends}
        }
        return item;
      })
    })
  } 
  // state jha banti hai whi modified ki jaa skti hai

 return (
  <>
   <div className="w=full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
    {realdata.map((item, index)=>(
      <Card key={index} index={index}  handleClick={handleFriendsButton} values={item}/>
    ))}
    </div>
   </>
 );
}
export default App



