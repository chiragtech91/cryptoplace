import React from 'react'
import { FaPhoneAlt, FaWhatsapp, FaGithub, FaLinkedin, FaRegClock } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import resume from "../Assets/ChiragGuptaResume.pdf";

const Contact = () => {
  return (
    <div className='contactWrap'>
      <h1>Let’s Work Together!</h1>
      <p>I’m available to exciting opportunities and collaborations. Whether you have a project, a question, or just want to say hello, feel free to reach out to me using the details below. I’d love to hear from you and explore how we can achieve great things together!</p>
      <div className="methodWrap">
        <ul>
          <li>
            <div className="iconWrap"><FaPhoneAlt /></div>
            <p><span>Phone</span> +91 9582037475</p>
          </li>
          <li>
            <div className="iconWrap"><MdMarkEmailRead /></div>
            <p><span>Email</span> <a href="mailto:chiragtech91@gmail.com">chiragtech91@gmail.com</a></p>
          </li>
          <li>
            <div className="iconWrap"><IoLocationSharp /></div>
            <p><span>Location</span> New Delhi, India</p>
          </li>
          <li>
            <div className="iconWrap"><FaLinkedin /></div>
            <p><span>LinkedIn</span> <a href="https://www.linkedin.com/in/chiragtech/" target='_blank'>Click to visit</a></p>
          </li>
          <li>
            <div className="iconWrap"><FaWhatsapp /></div>
            <p><span>Whatsapp</span> <a href="https://wa.me/919582037475" target='_blank'>Click to chat</a></p>
          </li>
          <li>
            <div className="iconWrap"><FaGithub /></div>
            <p><span>GitHub</span> <a href="https://github.com/chiragtech91" target='_blank'>Click to visit</a></p>
          </li>
          <li>
            <div className="iconWrap"><FaRegClock /></div>
            <p><span>Availability</span> Monday to Friday</p>
          </li>
          <li>
            <div className="iconWrap"><SiReaddotcv /></div>
            <p><span>Resume</span> <a href={resume} target='_blank'>Click to download</a></p>
          </li>
        </ul>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796339086!2d77.04416717106561!3d28.52755441229373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1735203289960!5m2!1sen!2sin" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default Contact