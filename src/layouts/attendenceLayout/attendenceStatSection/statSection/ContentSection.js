import React from 'react'
import img1 from '../../../../assets/image/mtattendanceimg1.jpg'

export default function ContentSection() {
  return (
    <div>

    <div style={{marginTop:'15px',display:'flex',justifyContent:'space-between', alignItems:'center'}}>
      <div style={{display:'flex', flexDirection:'column', gap:'15px'}}>
      
      <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <div style={{width:'8px', height:'8px', borderRadius:"50px" , backgroundColor:'green'}}></div>
        <p style={{fontWeight:'bold'}}>1,031 <span style={{fontWeight:"normal"}}>on time</span></p>
      </div>

      <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <div style={{width:'8px', height:'8px', borderRadius:"50px" , backgroundColor:'yellow'}}></div>
        <p style={{fontWeight:'bold'}}>191 <span style={{fontWeight:"normal"}}>Work from home</span></p>
      </div>

      <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <div style={{width:'8px', height:'8px', borderRadius:"50px" , backgroundColor:'red'}}></div>
        <p style={{fontWeight:'bold'}}>212 <span style={{fontWeight:"normal"}}>late attendance</span></p>
      </div>

      <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <div style={{width:'8px', height:'8px', borderRadius:"50px" , backgroundColor:'green'}}></div>
        <p style={{fontWeight:'bold'}}>66 <span style={{fontWeight:"normal"}}>absent</span></p>
      </div>

        
        
      </div>
      
      <div>
        <img src={img1} alt="" width={'100px'}/>
      </div>
    </div>
        <p style={{marginTop:'15px'}}><input type="checkBox" /> Better than <span style={{fontWeight:'bold'}}>91.3% </span> employees!</p>
    </div>
  )
}
