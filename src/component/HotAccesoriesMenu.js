import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/HotAccesoriesMenu.css"

const HotAccesoriesMenu =()=>{
  return (
    <div className='hotAccesories'>
      <Link className='hotAccesoriesLink' to="/music">Music Store</Link>
      <Link className='hotAccesoriesLink' to="/smartDevice">Smart Device</Link>
      <Link className='hotAccesoriesLink' to="/home">Home</Link>
      <Link className='hotAccesoriesLink' to="/lifestyle">Lifestyle</Link>
      <Link className='hotAccesoriesLink' to="/mobileAccesories">Mobile Accesories</Link>
    </div>
  )
}

export default HotAccesoriesMenu