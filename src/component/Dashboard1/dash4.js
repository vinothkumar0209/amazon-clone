import React from 'react'
import Nav from './nav'
import Menu from './menu'
import Ac from './Ac'
import './Dash.css'

function Dash4() {
  return (
    <div>
         <Nav/>
      <div className='split'>
        <Menu/>
        <Ac/>
       </div>
    </div>
  )
}

export default Dash4