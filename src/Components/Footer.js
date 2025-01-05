import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleHomeClick = () => {
    if(localStorage.getItem('activeLink') !== 'home') {
      localStorage.setItem('activeLink', 'home')
    }
    document.querySelectorAll('ul li').forEach(li => li.classList.remove('active'))
    document.querySelector('.home').classList.add('active')
  }

  return (
    <div className='footerWrap'>
      &copy; {currentYear} <Link onClick={()=> handleHomeClick()} to='/'>ChiragTech.dev</Link>. All rights reserved.
    </div>
  )
}

export default Footer