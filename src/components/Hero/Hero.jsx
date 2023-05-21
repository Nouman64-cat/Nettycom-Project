import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaThumbsUp } from 'react-icons/fa';
import metrics from '../../assets/metrics.png';
// import { PieChart, Pie, Sector } from 'recharts';
import './hero.css'
const Hero = () => {
  // const data = [
  //   { name: 'Slice 1', value: 400 },
  //   { name: 'Slice 2', value: 300 },
  //   { name: 'Slice 3', value: 300 },
  //   { name: 'Slice 4', value: 200 },
  // ];
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Aug', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Sep', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Oct', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Nov', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Dec', uv: 3490, pv: 4300, amt: 2100 },
  ];
  

  return (
    <div className='hero-container overall_margin' id='hero-section'>
      <div className='hero-text'>
        <div className='hero-text-header'>
         <p>we're hiring the self-motivated people to join the team.  <FaThumbsUp className='thumbs-up'/></p>
         
        </div>
        <h1>Start your digital marketing career</h1>
        <p className='gain'>Gain the work experience, mentorship and support
            you need to start your career in digital marketing.</p>
        <div className='hero-text-button'>
            <button type='button' className='btn_text1'>Start your career</button>
            <button type='button' className='btn_text'>Check How it works!</button>
        </div>
        <div className='hero-text-bottom'/>
      </div>
      <div className='hero-card'>
        <div className='hero-card-top'>
          <h2>Business Development Analytics</h2>
          <img src={metrics} alt='metrics' />
        </div>
        <p>Market Overview</p>
        <LineChart width={600} height={350} data={data} className='linechart'>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="pv" stroke="#003DF6" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="#FCC419" />
          <Tooltip />
          <Legend />
        </LineChart>
        {/* <PieChart width={350} height={350}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" label />
        </PieChart> */}
        <div className='hero-card-bottom'>
          <div className='hero-card-bottom-left'>
            <h3>Clients Cohorts ARR</h3>
            <p>Quarterly</p>
          </div>
          <div className='hero-card-bottom-right'>
            <h3>872</h3>
            <p>Lead</p>
          </div>
          <div className='hero-card-bottom-right'>
            <h3>620</h3>
            <p>Client</p>
          </div>
          <div className='hero-card-bottom-right'>
            <h3>220</h3>
            <p>Done</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
