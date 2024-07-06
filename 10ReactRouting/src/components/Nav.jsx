import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
    <NavLink style={(e)=>{
       return {
        color: e.isActive ? "blue" : "",
        fontWeight: e.isActive ? "bold" : "",
       }
    }} 
    to="/">Home</NavLink>
    <NavLink style={(e)=>{
       return {
        color: e.isActive ? "green" : "",
        fontWeight: e.isActive ? "bold" : "",
       }
    }}  
    to="/user">User</NavLink>
    <NavLink 
    style={(e)=>{
       return {
        color: e.isActive ? "aqua" : "",
        fontWeight: e.isActive ? "bold" : "",
       }
    }}  
    to="/about">About</NavLink>
   </nav>
  )
}

export default Nav