import React from "react";
import OverviewSection from "./attendenceStatSection/OverviewSection";
import StatSection from "./attendenceStatSection/StatSection";

import overviewimg1 from "../../assets/image/overviewimg1.jpg";
import overviewimg2 from "../../assets/image/overviewimg2.jpg";
import overviewimg3 from "../../assets/image/overviewimg3.jpg";
import overviewimg4 from "../../assets/image/overviewimg4.jpg";

const overviewSectionData = [
  { image: overviewimg1, title: "Average hours", value: "7h 17mins" },
  { image: overviewimg2, title: "Average check-in", value: "10:33 AM" },
  { image: overviewimg3, title: "On-time arrival", value: "98.56 %" },
  { image: overviewimg4, title: "Average check-out", value: "19:12 PM" },
];

export default function AttendenceStatSection() {
  return (
    <div style={{ display: "flex", gap:'20px' }}>
      <div style={{width:'50%'}}>
        <div style={{ display: "flex", justifyContent:'space-between'  }}>
          <div style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.5)", padding: "20px", borderRadius:'8px', width:'40%', height:'80px', marginBottom:'30px' }}>
            {overviewSectionData.slice(0, 1).map((val, key) => {
              const { image, title, value } = val;
              return (
                <OverviewSection
                  key={key}
                  image={image}
                  title={title}
                  value={value}
                  isFirst={true}
                />
              );
            })}
          </div>

          <div style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.5)", padding: "20px", borderRadius:'8px' , width:'40%', height:'80px', marginBottom:'30px' }}>
            {overviewSectionData.slice(1, 2).map((val, key) => {
              const { image, title, value } = val;
              return (
                <OverviewSection
                  key={key}
                  image={image}
                  title={title}
                  value={value}
                  isFirst={true}
                />
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.5)", padding: "20px", borderRadius:'8px', width:'40%', height:'80px', marginBottom:'30px' }}>
            {overviewSectionData.slice(2, 3).map((val, key) => {
              const { image, title, value } = val;
              return (
                <OverviewSection
                  key={key}
                  image={image}
                  title={title}
                  value={value}
                  isFirst={true}
                />
              );
            })}
          </div>

          <div style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.5)", padding: "20px", borderRadius:'8px' , width:'40%', height:'80px', marginBottom:'30px'}}>
            {overviewSectionData.slice(3, 4).map((val, key) => {
              const { image, title, value } = val;
              return (
                <OverviewSection
                  key={key}
                  image={image}
                  title={title}
                  value={value}
                  isFirst={true}
                />
              );
            })}
          </div>
        </div>

      </div>

      <div style={{ padding: "", width: "50%" }}>
        <StatSection />
      </div>
    </div>
  );
}
