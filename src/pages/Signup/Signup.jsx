import React, { useState, useEffect } from "react";
import { IoLogoGoogle } from "react-icons/io";
import { Link } from "react-router-dom";
import signup_frame from "../../assets/signup_frame.png";
import nettycom_icon from "../../assets/nettycom_icon.png";
import { ClipLoader } from 'react-spinners';
import { CircleLoader } from 'react-spinners'
import { ClimbingBoxLoader } from 'react-spinners'
import "./signup.css";
import Loader from "../Loader";

const Signup = () => {
  const [rememberMe, setRemember] = useState();
  const handleCheckboxChange = (event) =>{

  }
  const [loading, setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000)
  },[4000]);

  // useEffect(() => {
  //   const stars = document.querySelectorAll('.star');
  //   const numStars = 100;

  //   for (let i = 0; i < numStars; i++) {
  //     const star = stars[i];
  //     const left = Math.floor(Math.random() * 50);
  //     const top = Math.floor(Math.random() * numStars);
  //     const right = Math.floor(Math.random() * 50);
  //     const animationDelay = Math.random() * 5;

  //     star.style.left = `${left}%`;
  //     star.style.top = `${top}%`;
  //     star.style.right = `${right}%`;
  //     star.style.animationDelay = `${animationDelay}s`;
  //     const translateX = Math.floor(Math.random() * 100) - 50;
  //     const translateY = Math.floor(Math.random() * 100) - 50;

  //     star.style.animationName = 'twinkle';
  //     star.style.animationDuration = `${Math.floor(Math.random() * 10) +5}s`;
  //     star.style.animationTimingFunction = 'linear';
  //     star.style.animationIterationCount = 'infinite';
  //     star.style.transform = `translate(${translateX}%, ${translateY}%)`;
  //   }
  // }, []);
  console.log(" I am in sign up page");
  {/* {[...Array(100)].map((_,index) => (
        <span key= {index} className='star'></span>
      ))} */}
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
        <div className="signup-container">
          <div className="signup-form">
            <div className="login-form-header">
              <Link to="/">
                <img src={nettycom_icon} alt="nettcom" />
              </Link>
              <h1>Nettycom</h1>
            </div>

            <h2>Sign Up</h2>

            <button className="google-button">
              <IoLogoGoogle /> Sign in with Google
            </button>

            <form className="signup-form_input">
              <input placeholder="Name" type="name" required />
              <input placeholder="Email" type="email" required />
              <input placeholder="Password" type="password" required />
              <div className="forgotPassword">
                <label className="remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                    className="check"
                  />
                  <h5>Remember me</h5>
                </label>
                <p>Forgot Password?</p>
              </div>
              <button type="submit" className="create-account-btn">
                Create an account
              </button>
            </form>
            <p className="already">
              Already have an account?
              <Link to="/login">
                <span className="login">Log in</span>
              </Link>
            </p>
          </div>
          <div className="signup-image">
            <img src={signup_frame} alt="frame" />
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
