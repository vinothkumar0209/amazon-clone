import React from "react"
import '../Dashboard1/Dash.css'
import Acer from '../Dashboard1/photos/acerTv.webp'
import Mi from './photos/miTv.webp'
import SamsungTv from './photos/samsungTv.webp'
import LgTv from './photos/LgTv.webp'

const products=[
    {
      name  :'Acer 139 cm (55 inches) G Series 4K Ultra HD Smart LED Google TV',
      offerprice :'₹36,999',
      price :'M.R.P: ₹62,999 ',
      ratings:'4.1 out of 5 stars - 896 ratings',
      image: Acer,
  
  },
  {
    name  :'Xiaomi Smart TV A 80 cm (32) HD Ready Smart Google LED TV',
    offerprice :'₹12,990',
    price :'M.R.P: ₹24,999 ',
    ratings:'4 out of 5 stars - 1407 ratings',
    image: Mi,

},
{
    name  :'Samsung 80 cm (32 inches) HD Ready Smart LED TV',
    offerprice :'₹12,990 ',
    price :'M.R.P: ₹18,900 ',
    ratings:'4 out of 5 stars - 11,516 ratings',
    image: SamsungTv,

},
{
    name  :'LG 80 cm (32 inches) HD Ready Smart LED TV 32LQ643BPTA (Black)',
    offerprice :'',
    price :'',
    ratings:'3.9 out of 5 stars - 17,023 ratings',
    image: LgTv,

},  
  ]
  
  
  function Tv() {
    
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
  
  export default Tv