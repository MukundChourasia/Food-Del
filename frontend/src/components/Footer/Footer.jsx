import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer' >
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="" /> 
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum atque doloribus dolor. Odio aut ad cumque impedit optio accusamus dolores aliquam sit eos magni, natus doloribus at, iusto vel veniam!</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Deleviry</li>
                    <li>Privacy Police</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91-6282211615</li>
                    <li>contect@tomato.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer