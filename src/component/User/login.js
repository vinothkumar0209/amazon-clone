import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../User/formstyle.css' 

function Login() {
    const navigator=useNavigate()    
  return (
    <div className='form'>
        <div className='form-card'> 
          <h1>Sign in</h1>
          <p>Email or mobile phone number</p>
          <input type='text' placeholder=''/> <br/>
          <p>Password</p>
          <input type='password' placeholder=''/> <br/>

          <button onClick={()=>navigator("/dash1")}>Continue</button><br/>
          
          <p>By creating an account or logging in, you agree to Amazon’s<a href=''>Conditions of Use</a> and <a href=''>Privacy Policys.</a>.</p><br/>
          <Link to="/restpsw">Forget password?</Link><br/>
          <p>Buying for work?</p>
          <Link to=''>Shop on Amazon Business</Link><br/>
          <button onClick={()=>navigator("/")}>Create your amazon account</button>
        </div>
    </div>
  )
}

export default Login