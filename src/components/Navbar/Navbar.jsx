// import React,{ useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
// import nettycom_icon from '../../assets/nettycom_icon.png';
// import Loader from '../Loader'
// import './navbar.css'
// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   return (
//     <div className='navbar-container overall_margin' id='navbar'>
//       <div className='navbar-logo'>
//         <Link to='/'>
//           <img src={nettycom_icon} alt='netty'/>
//         </Link>
//         <h2>Nettycom</h2>

//       </div>
//       <div className='navbar-links'>
//         <Link to='/works'>
//           <p>How it works</p>
//         </Link>
//         <Link to='/marketers'>
//           <p>For marketers</p>
//         </Link>
//         <Link to='/business'>
//           <p>For business</p>
//         </Link>
//         <Link to='/resources'>
//           <p>Resources</p>
//         </Link>
//       </div>
//       <div className='navbar-buttons'>
//         <NavLink
//           exact = 'true'
//           to='/login'
//           ><p>Sign in</p>
//         </NavLink>
//         <Link to="/signup">
//           <button type='button'>Register Now</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import nettycom_icon from "../../assets/nettycom_icon.png";
const Menu = () => {
  return (
    <>
      <Link to="/works">
        <p>How it works</p>
      </Link>
      <Link to="/marketers">
        <p>For Marketers</p>
      </Link>
      <Link to="/business">
        <p>For Business</p>
      </Link>
      <Link to="/resources">
        <p>Resources</p>
      </Link>
    </>
  );
};
//CSS naming standard: BEM -> Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar" id='navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={nettycom_icon} alt="logo" />
          <h1>Nettycom</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <Link to="/login">
          <p>Sign in</p>
        </Link>
        <Link to="/signup">
          <button type="button">Sign up</button>
        </Link>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <Link to="/login">
                  <p>Sign in</p>
                </Link>
                <Link to="/signup">
                  <button type="button">Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
