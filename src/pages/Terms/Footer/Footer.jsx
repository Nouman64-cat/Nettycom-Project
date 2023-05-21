import React from 'react'
import copy_mail from '../../../assets/copy_mail.png'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container1'>
      <div className='footer-icon'>
        <img src={copy_mail} alt='copy_mail' />
        <h2>Send copy to email</h2>
      </div>
      <button type='button'>I Agree</button>
    </div>
  )
}

export default Footer
