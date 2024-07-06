import { useState } from "react"

/*function App() {
  
 const [score, setScore] = useState(110)
 
 

  return (
 <>
  <div className="p-4">
    <h1>{score}</h1>
    <button onClick={()=>setScore(200)} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white">change</button>
  </div>
</>
  )
}

export default App
*/


/*
function App(){
const [val, setVal] = useState(12);
  return (
    <div className="p-4">
      <h1>{val}</h1>
      <button onClick={()=>setVal((prev)=>prev+1)} className="px-3 py-1 bg-blue-400 rounded-full">change karo</button>
    </div>
  )
}

export default App
*/


// Advanced useState


/*
function App() {
  const [val, setVal] = useState({ name: "Ashish", isBanned: false });

  return (
    <div className="p-4">
      <h1>name: {val.name}</h1>
      <h2>banned: {val.isBanned.toString()}</h2>
      <button 
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-500"} text-xs rounded-full text-white`}
      >
        change
      </button>
    </div>
  );
}

export default App;
*/

/*
function App() {
  
 const [val, setVal] = useState({name: "Ashish", age: 21})
return (
  <div>
   <button onClick={()=>setInterval({...val, gender: "male"})}>Click</button>
  </div>
)
}
export default App;
*/


function App() {
  const [val, setVal] = useState([1,2,3,4,5,6])
  return (
   <div className="p-5">
    {val.map(item=><h1>{item}</h1>)}
    <button onClick={()=>setVal(()=>{
      return val.filter((item, index)=> index!=val.length-1)
    })}
    className="px-2 py-1 text-xs text-white rounded-full bg-blue-500">click</button>
   </div>
  )
}

export default App

