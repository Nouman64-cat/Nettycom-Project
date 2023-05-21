import React,{ useState, useEffect} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Layout from './pages/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import GetExperts from './components/GetExperts/GetExperts'
import GetHired from './components/GetHired/GetHired'
import Empowerment from './components/Empowerment/Empowerment'
import Footer from './components/Footer/Footer'
import Dashboard from './pages/Dashboard/Dashboard'
import Terms from './pages/Terms/Terms'
import Works from './pages/Works/Works'
import Resources from './pages/Resources/Resources'
import Marketers from './pages/Marketers/Marketers'
import Business from './pages/Business/Business'
const App = () => {

  return (
    <>
    <Routes>
      {/* <Route exact path='/' element={<Dashboard />}/> */}
      <Route exact path='/' element={<Home />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
      <Route path = '/terms/*' element={<Terms />}/>
      <Route path= '/works' element={<Works />} />
      <Route path = '/marketers' element={<Marketers />} />
      <Route path ='/business' element={<Business />} />
      <Route path = '/resources' element={<Resources />} />
    </Routes>
    </>
  )
}
export default App
