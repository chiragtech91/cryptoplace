import React from 'react'
import { BsArrowDownRightCircle } from 'react-icons/bs'

const Services = () => {
  return (
    <div className='servicesWrap'>
      <div className="serviceBox">
        <div className="numberBox">
          <span>01.</span>
          <BsArrowDownRightCircle />
        </div>
        <h2>React Developer</h2>
        <p>I build high-performance web applications in React, focusing on reusable components, state management, and responsive designs to deliver interactive and scalable solutions.</p>
      </div>
      <div className="serviceBox">
        <div className="numberBox">
          <span>02.</span>
          <BsArrowDownRightCircle />
        </div>
        <h2>UI/UX Developer</h2>
        <p>I design user-friendly interfaces that blend aesthetics with functionality, ensuring seamless navigation and enhanced user experiences across devices.</p>
      </div>
      <div className="serviceBox">
        <div className="numberBox">
          <span>03.</span>
          <BsArrowDownRightCircle />
        </div>
        <h2>Next JS Developer</h2>
        <p>I create fast, SEO-friendly web applications with Next.js, specializing in server-side rendering, static site generation, and optimized performance.</p>
      </div>
      <div className="serviceBox">
        <div className="numberBox">
          <span>04.</span>
          <BsArrowDownRightCircle />
        </div>
        <h2>Frontend Consultant</h2>
        <p>I provide expert advice on frontend development, helping my clients optimize their projects and enhance user experiences with modern frameworks.</p>
      </div>
    </div>
  )
}

export default Services