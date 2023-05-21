import React from 'react'
import people_group from '../../assets/people_group.png'
import girl_laptop from '../../assets/girl_laptop.png';
import './getexperts.css'
const GetExperts = () => {

  
  return (
    <div className='experts-container overall_margin'>
      <div className='experts-title'>
        <div className='experts-title-btn'>
        <button type='button'>Get Experts</button>
        <img src={people_group} alt='group'/>
        </div>
        
        <h1>Mentor or hire remote digital marketing talent</h1>
        <p>Get started whether you’re a cash constrained solopreneur, the owner of a mature company, anything between</p>
      </div>
      <div className='experts-image'>
        <img src={girl_laptop} alt='laptop'
       
        />
      </div>
    </div>
  )
}

export default GetExperts
