import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Sigin from './component/User/sigin'
import Login from './component/User/login'
import Forgetpassword from './component/User/forgetpassword'
import Dash1 from './component/Dashboard1/Dash1'
import Dash2 from './component/Dashboard1/Dash2'
import Dash3 from './component/Dashboard1/dash3'
import Dash4 from './component/Dashboard1/dash4'
import Dash5 from './component/Dashboard1/dash5'


function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Sigin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/restpsw" element={<Forgetpassword/>}/>
        <Route path="/dash1" element={<Dash1/>}/>
        <Route path="/dash2" element={<Dash2/>}/>
        <Route path="/dash3" element={<Dash3/>}/>
        <Route path="/dash4" element={<Dash4/>}/>
        <Route path="/dash5" element={<Dash5/>}/>
        
       
    </Routes>
  )
}

export default Routing