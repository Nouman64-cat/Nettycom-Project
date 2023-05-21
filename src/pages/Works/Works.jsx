import React, { useState, useEffect } from 'react'
import './works.css'
const Works = () => {
  const [showGuidingDiv, setShowGuidingDiv] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGuidingDiv(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="how-works-container">
      <h1>How it works</h1>
      <div className='how-works-cards'>
        <div className='card'>
          <h1>Fresh Digial marketers</h1>
          <p>Our team of digital marketers are always ready to help you with your digital marketing needs</p>
          <button type='button'>
            Sign up as a trainee
          </button>
        </div>
        <div className='card'>
        <h1>Digital Campaign</h1>
          <p>Our team of digital marketers are always ready to help you with your digital marketing needs</p>
          <button type='button'>
            Sign up as a trainee
          </button>
        </div>
        <div className='card'>
        <h1>Training & Guidance</h1>
          <p>Our team of digital marketers are always ready to help you with your digital marketing needs</p>
          <button type='button'>
            Sign up as a trainee
          </button>
        </div>
        <div className='card'>
        <h1>Digital Marketer</h1>
          <p>Our team of digital marketers are always ready to help you with your digital marketing needs</p>
          <button type='button'>
            Sign up as a trainee
          </button>
        </div>
      </div>
      <button type='button' className='bottom-button'>
        Learn more
      </button>
    </div>
  )
}

export default Works
