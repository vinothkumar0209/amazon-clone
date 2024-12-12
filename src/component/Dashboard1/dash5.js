import React from 'react'
import Nav from './nav'
import Menu from './menu'
import Helmet from './helmet'
import './Dash.css'

function Dash5() {
  return (
    <div>
         <Nav/>
      <div className='split'>
        <Menu/>
        <Helmet/>
      </div>  
    </div>
  )
}

export default Dash5