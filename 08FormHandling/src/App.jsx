import React from 'react'
import { useForm } from 'react-hook-form'

/* 1 Tarika-useRef
function App() {
 const name = useRef(null)
 const age = useRef(null)

 const  handleSubmit = (event) => {
  event.preventDefault();
  console.log(name.current.value, age.current.value)
 }

  return (
   <form action='' onSubmit={handleSubmit}>
  <input ref={name} placeholder='name' type='text' />
  <input ref={age} placeholder='age' type='text' />
  <input type='submit' />
   </form>
  )
}
export default App
*/



/* Second apporch 
function App() {
  const [val, setVal] = useState({name: "", email: ""})

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(val)
  }

  return (
    <div>
      <form action='' onChange={handleSubmit}>
        <input onChange={(event)=>setVal({...val, name: event.target.value})} type='text' placeholder='name'></input>
        <input onChange={(event)=>setVal({...val, email: event.target.value})} type='email' placeholder='email'></input>
        <input type='submit' />
      </form>
    </div>
  )
}

export default App
*/



function App() {
  const {register, handleSubmit} = useForm();
  return (
    <div>
      <form action='' onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register('name')} type='text' placeholder='name' />
        <input {...register('email')} type='email' placeholder='email' />
        <input type='submit' />
      </form>
    </div>
  )
}

export default App

/* Form handling => from submission par website reload  hojati hai aur react ka main focus ye hai webpage reload
nahi hona chaye phir kya matalab react use karne ka

hamare pass 3 tarike hai jisse page load na ho
1-useRef - is tarike mein hum har input ko select kar lete hai and unhe unki value tab nikaalte ha i jab
from submit hota hai
// useref kisi bhi html input ko select ko select kar skte ho
2-controlled components-  app jabhi kuchh likhoge useState ke through data real time par update dein
// jaise hi kuchh type ho set state kardo nayi value ke brabar
3-react hook from
*/