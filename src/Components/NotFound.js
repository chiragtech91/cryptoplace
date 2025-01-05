import React from 'react'
import { PiSmileySad } from "react-icons/pi";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notFoundWrap'>
      <h1><PiSmileySad /></h1>
      <h2>OOPS</h2>
      <h3>404 &ndash; Page not found</h3>
      <p>It seems the page you're looking for doesn't exist. You might have mistyped the URL or followed a broken link.
      Don't worry, let’s get you back on track: <Link to='/'>Go to Home</Link></p>
    </div>
  )
}

export default NotFound