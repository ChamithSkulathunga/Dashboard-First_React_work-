import React from 'react'
import topcss from './TopNav.module.css'

export default function NavigationItemList() {
  return (
    <div className={topcss.navLinkText} style={{display:'flex',marginLeft:'40px', gap:'40px'}}>
        <p>Dashboard</p>
        <p>Leave</p>
        <p className={topcss.active}>Attendance</p>
        <p>Perfomance</p>
    </div>
  )
}
