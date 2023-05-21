import React,{useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import GetExperts from '../../components/GetExperts/GetExperts'
import GetHired from '../../components/GetHired/GetHired'
import Empowerment from '../../components/Empowerment/Empowerment'
import Footer from '../../components/Footer/Footer'
import nettycom_icon from '../../assets/nettycom_icon.png';
import { ClimbingBoxLoader } from 'react-spinners'
import './home.css'
const Home = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true); //loading = true;
    setTimeout(() => {
      setLoading(false);
    },2000)
  },[100])
  return (
    <>
    
    {loading ? (
        <div className="loader-overlay1">
          
          {/* <CircleLoader color="#003DF6" /> */}
          {/* <img src={nettycom_icon} alt="icon"/>
          <ClimbingBoxLoader color="#FFC107" />
          <p>Nettycom</p> */}
          
          <h1>Nettycom</h1>
            <main>
              <svg class="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#5ebd3e" />
                    <stop offset="33%" stop-color="#ffb900" />
                    <stop offset="67%" stop-color="#f78200" />
                    <stop offset="100%" stop-color="#e23838" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stop-color="#e23838" />
                    <stop offset="33%" stop-color="#973999" />
                    <stop offset="67%" stop-color="#009cdf" />
                    <stop offset="100%" stop-color="#5ebd3e" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke-linecap="round" stroke-width="16">
                  <g class="ip__track" stroke="#ddd">
                    <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                    <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
                  </g>
                  <g stroke-dasharray="180 656">
                    <path class="ip__worm1" stroke="url(#grad1)" stroke-dashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                    <path class="ip__worm2" stroke="url(#grad2)" stroke-dashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
                  </g>
                </g>
              </svg>
          </main>
        </div>
      ) : (
      <div>
        <Navbar/>
        <Hero />
        <GetExperts />
        <GetHired />
        <Empowerment />
        <Footer />
      </div>
      )
    }
    </>
  )
}

export default Home
