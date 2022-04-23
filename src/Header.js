import React from 'react'
import {Link} from 'react-router-dom';
import './AppStyle.css'

const Header = () => {
  return (
    <div>
        <Link to='/home' className='home'><h1>HOME</h1></Link>
        <Link to ='/price' className='price'><h1>PRICE</h1></Link>
        <Link to ='/about' className='about'><h1>ABOUT</h1></Link>
        <Link to='/contact' className='contact'><h1>Contact</h1></Link>
    </div>
  )
}

export default Header