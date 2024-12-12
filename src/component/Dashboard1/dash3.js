import React from 'react'
import Nav from './nav'
import Menu from './menu'
import Tv from './tv'
import './Dash.css'

function Dash3() {
  return (
    <div>
         <Nav/>
      <div className='split'>
        <Menu/>
        <Tv/>
      </div>
    </div>
  )
}

export default Dash3