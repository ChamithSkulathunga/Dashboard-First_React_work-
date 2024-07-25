import React from "react";
import NavigationItemList from "./topNavigationLayout/NavigationItemList";
import SearchBar from "./topNavigationLayout/SearchBar";
import NotificationSection from "./topNavigationLayout/NotificationSection";
import ProfileSection from "./topNavigationLayout/ProfileSection";

export default function TopNavigationLayout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(0,0,0,0.5)",
        paddingBottom: "10px",
        paddingTop:'10px'
      }}
    >
      <NavigationItemList />
      <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
        <SearchBar />
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <NotificationSection />
          <ProfileSection />
        </div>
      </div>
    </div>
  );
}
