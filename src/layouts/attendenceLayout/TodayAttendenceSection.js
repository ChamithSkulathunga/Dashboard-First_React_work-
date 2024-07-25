import React from "react";
import TitleAndContentWrapper from "./common/TitleAndContentWrapper";
import AttendanceTitleSection from "./todayAttendenceSection/AttendanceTitleSection";
import AttendanceContent from "./todayAttendenceSection/AttendanceContent";

export default function TodayAttendenceSection() {
  return (
    <div >
      <TitleAndContentWrapper>
        
        <AttendanceTitleSection slot={'first'}/>
        
        <AttendanceContent slot={'second'}/>

      </TitleAndContentWrapper>
    </div>
  );
}
