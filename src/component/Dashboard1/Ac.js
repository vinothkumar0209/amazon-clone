import React from "react"
import '../Dashboard1/Dash.css'
import Daikin from '../Dashboard1/photos/daikinAc.webp'
import CarrierAc from './photos/carrierAc.webp'
import Voltas from './photos/voltasAc.webp'
import Bluestar from './photos/bluestar.webp'

const products=[
    {
      name  :'Daikin 0.8 Ton 3 Star, Fixed Speed Split AC ',
      offerprice :'₹26,490 ',
      price :'M.R.P: ₹37,400',
      ratings:'4 out of 5 stars - 1,531 ratings',
      image: Daikin,
  
  },
  {
    name  :'Carrier 1 Ton 3 Star AI Flexicool Inverter Split AC ',
    offerprice :'₹45,990',
    price :' M.R.P: ₹85,990',
    ratings:'4.2 out of 5 stars - 1,901 ratings',
    image: CarrierAc,

},
{
    name  :'Voltas 1.5 ton 3 Star Inverter Split AC',
    offerprice :'₹33,990',
    price :' M.R.P: ₹62,990 ',
    ratings:'3.5 out of 5 stars - 2,525 ratings',
    image: Voltas,

},
{
    name  :'Blue Star 1.0 Ton 3 Star Inverter Split AC ',
    offerprice :'₹31,990 ',
    price :'M.R.P: ₹51,500',
    ratings:'4 out of 5 stars - 3,655 ratings',
    image: Bluestar,

},  
  ]
  
  
  function Ac() {
    
    return (
      <div>
  
  <div className='subproduct'>
              {products.map((product, index)=>{
                return(
                <div className="product-card" key={index}>
  
                <div className="product-details">
                  <img src={product.image} alt={product.name} className='product-image'/>
                  
                  <h4 className="product-name">{product.name}</h4>
                  <p className="offerprice">{product.offerprice}</p><br/>
                  <p className="price">{product.price}</p><br/>
                  <p className="product-reviews">{product.ratings}</p>
                </div>
              </div>
              )}
              )}
          </div>
         
      </div>
    )
  }
  
  export default Ac