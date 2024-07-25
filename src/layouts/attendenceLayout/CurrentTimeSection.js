import React from 'react'
import ClockImg from '../../assets/image/clock.jpg'

export default function CurrentTimeSection() {
  return (
    <div style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
      borderRadius:'10px',
      padding:'10px 10px',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      gap:'20px'
    }}>
      <div>
      <p style={{marginBottom:'0px'}}>Current time</p>
      <h3 style={{marginTop:'0px'}}>26 Sept 2024, 12:10PM</h3>
      </div>
      <div>
        <img src={ClockImg} alt="" />
      </div>
    </div>
  )
}
