import React from "react";
import GreetingSection from "./attendenceLayout/GreetingSection";
import CurrentTimeSection from "./attendenceLayout/CurrentTimeSection";
import TodayAttendenceSection from "./attendenceLayout/TodayAttendenceSection";
import AttendenceStatSection from "./attendenceLayout/AttendenceStatSection";
import TableSection from "./attendenceLayout/TableSection";
import SecondTableSection from "./attendenceLayout/SecondTableSection";

export default function AttendenceLayout() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <GreetingSection />
        <CurrentTimeSection />
      </div>

      <div style={{ display: "flex", gap:'20px'}}>
        <div style={{ padding: "10px", width:'30%' }}>
          <TodayAttendenceSection />
        </div>
        <div style={{ paddingTop: "10px", width:'70%' }}>
        <AttendenceStatSection />
        </div>
      </div>

      <div style={{ display: "flex", gap:'20px' }}>
        <div style={{width:'50%'}}>
        <TableSection />
        </div>
        <div style={{width:'50%'}}>

        <SecondTableSection/>
        </div>
      </div>
    </div>
  );
}
