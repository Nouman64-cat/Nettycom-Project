import React,{ useState, useEffect } from 'react'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import login_frame from '../../assets/login_frame.png'
import nettycom_icon from '../../assets/nettycom_icon.png'
import { ClimbingBoxLoader } from 'react-spinners'
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked);
  };
  const [loading, setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000)
  },[4000])
  return (
    <>
    {loading ? (
        <div className="loader-overlay">
          {/* <CircleLoader color="#003DF6" /> */}
          <img src={nettycom_icon} alt="icon"/>
          <ClimbingBoxLoader color="#FFC107" />
          <p>Nettycom</p>
        </div>
      ) : (
    <div className='login-container'>
      <div className='login-form'>
        
            <div className='login-form-header'>
            <Link to='/'>
              <img src={nettycom_icon} alt='nettcom' />
            </Link>
            <h1>Nettycom</h1>
          </div>
          
          <h3>Log in to your account</h3>
          <p>Welcome back! select method to log in:</p>
          <div className='google-facebook-button'>
            <div className='google-div'>
              <img src={google} alt='google' />
              <p>Google</p>
            </div>
            <div className='facebook-div'>
              <img src={facebook} alt='facebook'/>
              <p>Facebook</p>
            </div>
          </div>
          <form className='login-form_input'>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <div className='remember-me'>
            <label className='remember'>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleCheckboxChange}
                      className='check'
                    />
                    <h5>Remember me</h5>
                  </label>
                  <p>Forgot Password?</p>
            </div>
            <button type='submit' className='login-btn'>
              Log in
            </button>
          </form>
          <p className='already1'>Don't have an account?<Link to='/signup'><span className='signup'>Create an account</span></Link></p>
      </div>
      <div className='login-image'>
        <img src={login_frame} alt='frame' />
      </div>
    </div>
      )}
    </>
  )
}

export default Login