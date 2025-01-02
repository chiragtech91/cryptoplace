import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>Copyright &copy; {new Date().getFullYear()}, CryptoPlcae - All rights reserved.</p>
    </div>
  )
}

export default Footer