import React from 'react'
import '../Dashboard1/Dash.css'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu'>
        <h3>MENU</h3><br/><br/><br/>
        <Link to="/dash1"><p> Mobiles</p></Link><br/><br/>
        <Link to="/dash2"><p>Laptops</p></Link><br/><br/>
        <Link to="/dash3"><p>TV</p></Link><br/><br/>
        <Link to="/dash4"><p>AC</p></Link><br/><br/>
        <Link to="/dash5"><p>Helmets</p></Link><br/><br/>
    </div>
  )
}

export default Menu