import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../User/formstyle.css'

function Forgetpassword() {
  const navigator=useNavigate()
  return (
    <div className='form'> 
     <div className='form-card'> 
      <h1>Forgetpassword</h1>
          <input type='password' placeholder='Old-password'/> <br/>
          <input type='password' placeholder='New-password'/> <br/>
          <input type='password' placeholder='Re-enter new password'/> <br/>

          
          <button onClick={()=>navigator("/dash1")}>Login</button><br/>
     </div>
    </div>
  )
}

export default Forgetpassword