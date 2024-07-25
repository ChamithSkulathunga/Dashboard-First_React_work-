import React from "react";
import LeftMenuLayout from "./navigationWrapper/LeftMenuLayout";
import TopNavigationLayout from "./navigationWrapper/TopNavigationLayout";

export default function NavigationWrapper({ children }) {
  return (
    <div style={{ height: "100%", display: "flex", padding: "10px" }}>
      <div style={{padding:'0px'}}>
        <LeftMenuLayout />
      </div>
      <div style={{ width: "100%" }}>
        <TopNavigationLayout />
        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
}
