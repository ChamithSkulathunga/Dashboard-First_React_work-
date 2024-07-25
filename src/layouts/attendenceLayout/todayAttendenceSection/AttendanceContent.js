import React from "react";
import img1 from '../../../assets/image/TodayImg1.jpg'
import img2 from '../../../assets/image/TodayImg2.jpg'

export default function attendanceContent() {
  return (
    <div>

    <div style={{marginTop:'15px',display:'flex',justifyContent:'space-between', alignItems:'center'}}>
      <div>
        <img src={img1} alt="" width={'30px'} />
        <p>You have not marked</p>
        <p>yourself as present today!</p>
        <div style={{display:'flex', gap:'10px', alignItems:'center', marginTop:'15px'}}>
          <div style={{height:'20px', width:'1px', backgroundColor:'red', borderRadius:'10px' }}></div>
          <p>Time left : <span style={{color:'red'}}>56m 44s</span></p>
        </div>
      </div>
      
      <div>
        <img src={img2} alt="" width={'100px'}/>
      </div>
    </div>
        <button style={{ width:'100%' ,padding:'10px 115px', marginTop:'15px', backgroundColor:'blue', color:'white', fontWeight:'600', border:'none', borderRadius:'8px'}}>Mark Present</button>
    </div>
  );
}
