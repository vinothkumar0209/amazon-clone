import React from 'react'
import {  useNavigate } from 'react-router-dom'
import '../User/formstyle.css'

function Sigin() {
    const navigator=useNavigate()
  return (
    <div className='form'>
    
    <div className='form-card'> 
      <h1>Create Account </h1><br/>
      <p>Your name</p>
      <input type='text' placeholder='first and last'/> <br/>
      <p>Mobile number</p>
      <input type='text' placeholder='Mobile number'/> <br/>
      <p>Password</p>
      <input type='password' placeholder='aleast 6 characters'/> <br/><br/>
      <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply</p>

      <button onClick={()=>navigator("/login")}>Verify mobile number</button><br/><br/>
      <p>Buying for work?</p>
      <a href=''>Create a free business account</a><br/>
      <p>Already have an account?  <a href=''>Sign in</a></p><br/>
      <p>By creating an account or logging in, you agree to Amazon’s <a href=''>Conditions of Use</a> and <a href=''>Privacy Policy</a>.</p>
      
    </div>
</div>

  )
}

export default Sigin