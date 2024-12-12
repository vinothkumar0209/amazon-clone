import React from 'react'
import Menu from './menu'
import Laptop from './laptop'
import Nav from './nav'
import '../Dashboard1/Dash.css'

function Dash2() {
  return (
    <div>
      <Nav/>
      <div className='split'>
        <Menu/>
        <Laptop/>
      </div>
    </div>
  )
}

export default Dash2