import React, { useState } from 'react'
import { Tabs, Tab,TabScrollButton  } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { PieChart, Pie, Cell } from 'recharts';
// import { BarChart, XAxis, YAxis, Bar } from 'recharts';
import './empowerment.css'
import { FeaturedPlayList } from '@mui/icons-material';


const Features = ({ desc }) => {
    return (
        
        <div className='features'>
            <CheckCircleIcon sx={{ color: '#1D7376', marginTop: "5px" }}/>
            <p className='desc'>{desc}</p>
        </div>
    )
}
const MyTabs = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    return(
        <div className='mytabs'>
            <Tabs 
                value={value} 
                onChange={handleChange} 
                variant="scrollable"
                scrollButtons={{
                    start: <TabScrollButton icon={<MoreHorizIcon />} />,
                    end: <TabScrollButton icon={<MoreHorizIcon />} />,
                }}
                >
                <Tab label="1"/>
                <Tab label="2"/>
                <Tab label="3"/>
            </Tabs>
            {value === 0 &&
                <div className='tab1'>
                    <h1>Gain experienced at your own pace</h1>
                    <p>Work with a mentor for 3 months and gain the digital marketing work experience you need to get hired. 100% remote and always free</p>
                    <Features desc = "Gain experience" />
                    <Features desc = "Get connected" />
                    <Features desc = "Multi platform" />
                    <Features desc = "Get certified" />
                </div>
             }
            {value === 1 && 
                <div className='tab2'>
                    Item Two
                </div>
            }
            {value === 2 && 
                <div className='tab3'>
                    Item Three
                </div>
            }
        </div>
    )
}
const Empowerment = () => {
    // const data = [
    //     { name: 'A', value: 20 },
    //     { name: 'B', value: 30 },
    //     { name: 'C', value: 10 },
    //     { name: 'D', value: 15 },
    //     { name: 'E', value: 5 },
    //     { name: 'F', value: 23 },
    //   ];
    const data = [
        { name: 'Group A', value: 350 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='empowerment-container overall_margin'>
      <div className='empowerment-top'>
        <h1>Empowering marketers and business everywhere</h1>
        <button type='button'>Learn More</button>
      </div>
      <p>Work with a mentor for 3 months and gain the digital marketing work experience you need to get hired</p>
      <div className='empowerment-bottom'>
        <div className='empowerment-bottom-left'>
            <MyTabs />
        </div>
        <div className='empowerment-bottom-right'>
            <h3>Apprenticeships for Mareters</h3>
            <h2>Hi Alex Brown</h2>
            <p>Build a stellar profile, then chat and interview with vetted marketing mentors.</p>
            <div className='chart'>
                <PieChart width={300} height={300}>
                    <Pie data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label = {value => `${(value.value/1150*360).toFixed(2)}%`}

                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                        
                    </Pie>
                </PieChart>
                {/* <BarChart width={500} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Empowerment
