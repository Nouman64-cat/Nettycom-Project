import React,{ useState } from 'react'
import people_group from '../../assets/people_group.png';
import call_man from '../../assets/call_man.png';
import mail_green from '../../assets/mail_green.png';
import analytics from '../../assets/analytics.png';
import { FaStar } from 'react-icons/fa';
import share_academy from '../../assets/share_academy.png';
import academy_send from '../../assets/academy_send.png'
import { IoIosArrowUp } from 'react-icons/io';
import { FaCheckCircle } from 'react-icons/fa';
import google from '../../assets/google.png'
import brave from '../../assets/brave.png'
import mail from '../../assets/mail.png'
import './gethired.css'
const GetHired = () => {
  

  return (
    <div className='gethired-container primary_bg overall_margin'>
      <div className='gethired-title'>
        <h1>Get hired in full-time in marketing in eight week</h1>
        <p>Upgrade to access exclusive courses, a personalized learning plan, and the expert coaching that will get you hired full tim in digital marketing</p>
      </div>
      <div className='gethired-content'>
        <div className='gethired-content-left'>
            <h2>Email marketing</h2>
            <div className='gethired-content-left-box'>
              <div className='gethired-content-left-box-top'>
                <img src={mail_green} alt='gree' className='mail-green'/>
                <img src ={analytics} alt='analytics' className='analytics-image'/>
              </div>
              <p id='inbox-mail-p'>Today inbox email</p>
              <div className='gethired-content-left-box-bottom'>
                <h2>2,456</h2>
                <p>3.2%</p>
              </div>
            </div>
            <div className='gethired-content-left-link'>
              <div className='google-div1'>
              <img className='google' src={google} alt='google'  />
              <h3>Gmail</h3>
              </div>
              
              <p><FaCheckCircle /> connected</p>
            </div>
            <div className='gethired-content-left-link'>
            <div className='google-div1'>
              <img src={brave} alt='brave' className='google' />
              <h3>Brave</h3>
            </div>
              <p><FaCheckCircle /> connected</p>
            </div>
            <div className='gethired-content-left-link'>
            <div className='google-div1'>
              <img src={mail} alt='mail' className='google'/>
              <h3>Gmail</h3>
            </div>
              <p><FaCheckCircle /> connected</p>
              
            </div>
        </div>
        <div className='gethired-content-right'>
            <div className='gethired-content-right-top'>
              <div className='card1'>
                <div className='card1-image'>
                <img src={call_man} alt='man'/>
                <a href='https://www.youtube.com/'>
                  <h2>Find talent now</h2>
                </a>
                </div>
              
                <div className='card1-div'>
                  
                    <div className='card1-div-top'>
                      <p>MARKETING INSIGHT</p>
                    </div>
                    <div className='card1-div-bottom'>
                      <h3>Alex B</h3>
                      <p>Ceo of Volia.Co</p>
                      <p><FaStar className='star-icon'/> 4.9</p>
                    </div>
                </div>
              </div>
              <div className='card2'>
                <div className='card2-image'>
                <img src={people_group} alt='group' />
                <div className='card2-text'>
                  
                  <p>Market helped me a lot through my learning about digital marketing while I was in Canada</p>
                </div>
                </div>
                <button type='button'>Start your career</button>
              </div>
            </div>
            <div className='gethired-content-right-bottom'>
              <div className='gethired-content-right-bottom-top'>
                <img src={share_academy} alt="academy" className='academy'/>
                <h1>Share with Academy</h1>
                <img src={academy_send} alt='send' className='send'/>
              </div>
              <p>Get hired full-time in marketing in eight week</p>
              <div className='line'/>
              <div className='gethired-content-right-bottom-bottom'>
                <p>Learn through online classes  from an expert professor over 12 modulus , until you’re hired</p>
                <button type='button'>Join academy</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GetHired
