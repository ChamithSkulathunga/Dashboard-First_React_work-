import React from 'react'

export default function TableTitleSection() {
  return (
    <div>
      <h4  style={{padding:'0px 0px 20px 0px'}}>My Tearm</h4>
      <div style={{display:'flex', gap:'15px'}}>

        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <div style={{width:'10px', height:'10px', backgroundColor:'blue' , borderRadius:'50px'}}></div>
          <p>in office</p>
        </div>

        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <div style={{width:'10px', height:'10px', backgroundColor:'yellow' , borderRadius:'50px'}}></div>
          <p>Work from home</p>
        </div>

        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <div style={{width:'10px', height:'10px', backgroundColor:'red' , borderRadius:'50px'}}></div>
          <p>on leave</p>
        </div>

        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <div style={{width:'10px', height:'10px', backgroundColor:'green' , borderRadius:'50px'}}></div>
          <p>absent</p>
        </div>

        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <div style={{width:'10px', height:'10px', backgroundColor:'gray' , borderRadius:'50px'}}></div>
          <p>holiday</p>
        </div>



      </div>
    </div>
  )
}
