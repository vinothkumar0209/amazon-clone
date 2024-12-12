import React from 'react'
import Left from './menu'
import Nav from './nav'
import Mobile from './mobile'
import '../Dashboard1/Dash.css'
import Menu from './menu'

function Dash1() {
  return (
    <div className='dash1'>
        <Nav/>
        <div className='split'>
          <Menu/>
          <Mobile/>
        </div>
      
    </div>
  )
}

export default Dash1