import React from 'react'
import './marketer.css'
import { Link } from 'react-router-dom'
import laptop4 from '../../assets/laptop4.png'
import png1 from '../../assets/png1.png'
import png2 from '../../assets/png2.png'
const Marketers = () => {
  return (
    <div className='marketer-container'>
      <div className='marketer-header'>
        <Link to='/'>
          <img className='png1' src={png1} alt='adf' />
        </Link>
        <h1>Website is under development</h1>
      </div>
      <div className='marketer-footer'>
      
        <img className='construction' src={laptop4} alt='alto' />
        <Link to='/'>
          <img className='png2' src={png2} alt='adf' />
        </Link>
      </div>
    </div>
  )
}
// create a sign up button

export default Marketers
