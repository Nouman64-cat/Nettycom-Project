import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Term = ({number,desc}) =>{
  return(
    <div className='term'>
      <div className="circle-number">
        {number}
      </div>
      <p>{desc}</p>
    </div>
  )
}
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <Term number = {1} desc='Accepting the terms' />
      <Term  number = {2} desc='Changes to terms' />
      <Term  number = {3} desc='Using our product' />
      <Term  number = {4} desc='General restrictions' />
      <Term  number = {5} desc='Content policy' />
      <Term  number = {6} desc='Your rights' />
      <Term  number = {7} desc='Copy right policy' />
      <Term  number = {8} desc='Relationship Guidelines' />
      <Term  number = {9} desc='Usability policy' />
      <Term  number = {10} desc='General legal terms' />
    </div>
  )
}

export default Sidebar
