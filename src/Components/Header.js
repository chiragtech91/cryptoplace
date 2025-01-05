import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [respMenuOpen, setRespMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(() => {
    return localStorage.getItem('activeLink') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('activeLink', activeLink);
  }, [activeLink]);

  const handleNavClick = (link) => {
    document.querySelector('.home').classList.remove('active')
    setActiveLink(link);
    setRespMenuOpen(false);
  };

  const handleMenuOpen = ()=> {
    setRespMenuOpen(!respMenuOpen);
  }

  return (
    <div className='headerWrap'>
      <Link onClick={() => handleNavClick('home')} to='/'><h1><span>&lt;C</span>hirag<span>T</span>ech<span>/&gt;</span></h1></Link>

      <nav>
        <ul>
          <li onClick={() => handleNavClick('home')} className={activeLink === 'home' ? 'active home' : 'home'}><Link to='/'>Home</Link></li>
          <li onClick={() => handleNavClick('about')} className={activeLink === 'about' ? 'active' : ''}><Link to='about'>About</Link></li>
          <li onClick={() => handleNavClick('services')} className={activeLink === 'services' ? 'active' : ''}><Link to='services'>Services</Link></li>
          <li onClick={() => handleNavClick('contact')} className={activeLink === 'contact' ? 'active' : ''}><Link to='contact'>Contact</Link></li>
          <li onClick={() => handleNavClick('portfolio')} className={activeLink === 'portfolio' ? 'active' : ''}><Link to='portfolio'>portfolio</Link></li>
        </ul>
      </nav>

      <button onClick={()=>handleMenuOpen()} className='menuBtn'><CiMenuFries /></button>
      <div className={respMenuOpen ? 'mobileNav open' : 'mobileNav'}>
        <button onClick={()=>handleMenuOpen()}><RxCross2 /></button>
        <ul>
          <li onClick={() => handleNavClick('home')} className={activeLink === 'home' ? 'active home' : 'home'}><Link to='/'>Home</Link></li>
          <li onClick={() => handleNavClick('about')} className={activeLink === 'about' ? 'active' : ''}><Link to='about'>About</Link></li>
          <li onClick={() => handleNavClick('services')} className={activeLink === 'services' ? 'active' : ''}><Link to='services'>Services</Link></li>
          <li onClick={() => handleNavClick('contact')} className={activeLink === 'contact' ? 'active' : ''}><Link to='contact'>Contact</Link></li>
          <li onClick={() => handleNavClick('portfolio')} className={activeLink === 'portfolio' ? 'active' : ''}><Link to='portfolio'>portfolio</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header