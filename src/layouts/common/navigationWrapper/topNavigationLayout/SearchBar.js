import React from "react";
// import searchimg from '../../../../assets/image/serchbar.jpg'
export default function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
       
        border: "1px solid black",
        padding: "10px 85px 8px 10px",
        borderRadius: "10px",
      }}
    >
      <div>
        <svg
          width="24"
          height="24"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 15.5L19 19"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p style={{margin:'0'}}>Search anything..</p>
      
    </div>
    // <div>
    //     <img src={searchimg} alt="" />
    // </div>
  );
}
