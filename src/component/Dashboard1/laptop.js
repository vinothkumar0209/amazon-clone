import React from "react"
import '../Dashboard1/Dash.css'
import Hp from '../Dashboard1/photos/hp.webp'
import Dell from './photos/dell.webp'
import Lenova from './photos/lenovo.webp'
import Macbook from './photos/macbook.webp'

const products=[
    {
      name  :'HP 15s Core i5 12th Gen (16GB RAM/512GB SSD)',
      offerprice :'₹50,990',
      price :'M.R.P: ₹62,417 ',
      ratings:'3.9 out of 5 stars - 228 ratings',
      image: Hp,
  
  },
  {
      name  :'Dell Inspiron 3520 Laptop, 12th Gen',
      offerprice :'₹43,990 ',
      price :'M.R.P: ₹95,000',
      ratings:'3.7 out of 5 stars - 160 ratings',
      image: Dell,
  
  },
  {
      name  :'Lenovo IdeaPad 1 AMD Athlon Silver 7120U 15.6" HD',
      offerprice :'₹22,990 ',
      price :' M.R.P: ₹43,790 ',
      ratings:'4 out of 5 stars -  386 ratings ',
      image: Lenova,
  
  },
  {
      name  :'Apple MacBook Air Laptop: Apple M1 chip',
      offerprice :'₹59,990 ',
      price :'M.R.P: ₹89,900 ',
      ratings:'4.6 out of 5 stars - 4,591 ratings ',
      image: Macbook,
  
  },
  ]
  
  
  function Laptop() {
    
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
  
  export default Laptop