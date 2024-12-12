import React from "react"
import '../Dashboard1/Dash.css'
import Axor from './photos/axorhelmet.webp'
import Steelbird from './photos/steelbirdHelmet.webp'
import RE from './photos/REhelmet.webp'
import Vega from './photos/vegaHelmet.webp'

const products=[
    {
      name  :'Axor Apex Streak Black Orange Helmet-M',
      offerprice :'₹4,395',
      price :'M.R.P: ₹4,994 ',
      ratings:'4.8 out of 5 stars - 35 ratings',
      image: Axor,
  
  },
  {
    name  :'Steelbird GT Off Road ISI Certified Motocross Double Visor Full Face Helmet',
    offerprice :'₹1,839',
    price :' M.R.P: ₹2,299',
    ratings:'3.9 out of 5 stars - 1304 ratings',
    image: Steelbird,

},
{
    name  : 'Royal Enfield ISI Certified Open Face Riding MLG Helmet',
    offerprice :'₹1,974 ',
    price :'M.R.P: ₹2,100',
    ratings:'4 out of 5 stars - 174 ratings',
    image: RE,

},
{
    name  :'Vega Bolt Black Helmet-M',
    offerprice :'₹1,558 ',
    price :'M.R.P: ₹1,997 ',
    ratings:'4.3 out of 5 stars - 1518 ratings',
    image: Vega,

},  
  ]
  
  
  function Helmet() {
    
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
  
  export default Helmet