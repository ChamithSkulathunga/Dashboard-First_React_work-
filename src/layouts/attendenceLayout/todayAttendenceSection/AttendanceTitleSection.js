import React from 'react'

export default function AttendanceTitleSection() {
  return (
    <div style={{ display: "flex", alignItems: "center",justifyContent:'space-between', paddingBottom:'30px' }}>
    <h4>Today</h4>
    <span
      style={{
        backgroundColor: "red",
        borderRadius: "10px",
        padding: "2px 7px",
        color: "white",
        fontSize:'10px',
        alignItems:'center'
      }}
    >
      Absent
    </span>
  </div>
  )
}
