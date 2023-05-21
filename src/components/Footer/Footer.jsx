import React from 'react'
import nettycom_icon from '../../assets/nettycom_icon.png'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  const handleLogoClick = () => {
    const navbar = document.getElementById('navbar');
    navbar.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='footer-container'>
      <div className='footer-top overall_margin'>
        <p>About</p>
        <p>Check</p>
        <p>Career</p>
        <p>Blog</p>
        <p>Academy</p>
        <p className='terms'>
        <Link to='/terms' className='terms1'>
          Terms of service
        </Link>
        </p>
      </div>
      <div className='footer-text-bottom overall_margin'/>
      <div className='footer-bottom'>
        <div className='footer-bottom-left overall_margin'>
          <div className='footer-icon' onClick={handleLogoClick}>
            <img src={nettycom_icon} alt='icon' />
          <h1>Nettycom</h1>
          </div>
            
            <h3>Start your digital marketing career</h3>
            <p>Market 2022 All right reserved.</p>
        </div>
        <div className='footer-bottom-right'>
            <div className='footer-bottom-right-links'>
                <h4>Resources</h4>
                <p>Customers</p>
                <p>Ebooks & Guides</p>
                <p>Roadmap</p>
                <p>Api Documentation</p>
            </div>
            <div className='footer-bottom-right-links'>
                <h4>Platform</h4>
                <p>Analytics</p>
                <p>Planning</p>
                <p>Collaboration</p>
                <p>Data Management</p>
            </div>
            <div className='footer-bottom-right-links'>
                <h4>Support</h4>
                <p>24/7 support</p>
                <p>Help Center</p>
                <p>Free Tools</p>
                <p>Community</p>
            </div>
            <div className='footer-bottom-right-links'>
                <h4>Brand</h4>
                <p>Contact</p>
                <p>Affiliate Program</p>
                <p>
                    Community event
                </p>
                <p>App Developer</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
