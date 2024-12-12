import React from 'react'
import'../Dashboard1/Dash.css'
import Samsung from '../Dashboard1/photos/Samsung.jpg'
import Iphone from '../Dashboard1/photos/Iphone.jpg'
import vivo from '../Dashboard1/photos/vivo.jpg'
import Oneplus from '../Dashboard1/photos/Oneplus.jpg'
import Poco from '../Dashboard1/photos/Poco.jpg'
import Realme from '../Dashboard1/photos/Realme.jpg'
import { useNavigate } from 'react-router-dom'

const products=[
  {
    name  :'Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)',
    offerprice :'₹72,999',
    price :'M.R.P.: ₹1,49,999',
    ratings:'4.5 out of 5 stars - 2,627 ratings ',
    image: Samsung,

},
{
    name  :'Apple iPhone 15 Pro Max (256 GB) - White Titanium',
    offerprice :'₹1,19,900',
    price :'M.R.P.: ₹1,59,900',
    ratings:'4.4 out of 5 stars -  304 ratings ',
    image: Iphone,

},
{
    name  :'Vivo T3X 5G (Crimson Bliss, 4GB Ram, 128GB Storage)',
    offerprice :'₹12,438',
    price :'M.R.P.: ₹17,499',
    ratings:'4.4 out of 5 stars -  23 ratings ',
    image: vivo,

},
{
    name  :'OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)',
    offerprice :' ₹17,999',
    price :'M.R.P.: ₹20,999',
    ratings:'4.1 out of 5 stars - 3,376 ratings ',
    image: Oneplus,

},
// {
//     name  :'POCO M6 5G, Orion Blue (4GB, 64GB)',
//     offerprice :' ₹7,998',
//     price :'M.R.P.: ₹9,499',
//     ratings:'3.9 out of 5 stars - 69 ratings ',
//     image: Poco,

// },
// {
//     name  :'realme GT 7 Pro (Mars Orange,12GB+256GB)',
//     offerprice :' ₹59,999',
//     price :'M.R.P.: ₹69,999',
//     ratings:'4.4 out of 5 stars -  270 ratings',
//     image: Realme,

// },
]


function Mobile() {
  
  const navigator=useNavigate()

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
        {/* <div className='btn'>
           <button onClick={()=>navigator("/login")}>Previews</button>
           <button onClick={()=>navigator()}>Next</button>       
        </div> */}
    </div>
  )
}

export default Mobile