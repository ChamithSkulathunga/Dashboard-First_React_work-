import React from "react";
import dashboardImg from "../../../assets/image/dashboard.png";
import buildingImg from "../../../assets/image/building.png";
import calanderImg from "../../../assets/image/calendar.jpg";
import parkingImg from "../../../assets/image/parkings.jpg";
import bagImg from "../../../assets/image/bag.jpg";
import msgImg from "../../../assets/image/message.png";
import logoImg from "../../../assets/image/logo.png";

export default function LeftMenuLayout() {
  return (
    <div
      style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        borderRadius:'10px 10px 10px 10px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "left",
        padding:'10px',
        height:'626px'
        
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logoImg} alt="" width={"30px"} />
        <p style={{fontWeight:'bold'}}>logo</p>
      </div>

      <div style={{marginBottom:'100px', display:'flex', flexDirection:'column', gap:'15px'}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent:'space-between',
            alignItems:"center",
          
           
          }}
        >
          <img src={dashboardImg} alt="" width={"20px"} />
          <p style={{}}>Dashborad</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={buildingImg} alt="" width={"20px"} />
          <p style={{}}>city</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={calanderImg} alt="" width={"20px"} />
          <p style={{}}>Calander</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={parkingImg} alt="" width={"20px"} />
          <p style={{}}>Parking</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={bagImg} alt="" width={"20px"} />
          <p style={{}}>Recrut</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={msgImg} alt="" width={"20px"} />
          <p style={{}}>Messages</p>
        </div>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:'10px'}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={dashboardImg} alt="" width={"20px"} />
          <p style={{}}>Help</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={dashboardImg} alt="" width={"20px"} />
          <p style={{}}>Settings</p>
        </div>
      </div>

    </div>
  );
}
