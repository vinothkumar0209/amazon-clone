import React from 'react'
import '../Dashboard1/Dash.css'
import { useNavigate } from 'react-router-dom'


function Nav() {

  const navigator=useNavigate()

  return (
    
    <div className='navbar'>
      <input type='text' placeholder='Search Amazon.in'/>
      <button onClick={()=>navigator("/dash5")}>Search</button>
      <button onClick={()=>navigator("/login")}>Login</button>
    </div>
   
  )
}

export default Nav