import React, { Children } from "react";

export default function TabelTitleAndContentWrapper({ children }) {
  let firstChild, secondChild;

  Children.forEach(children, child => {
    if (child.props.slot === "first") {
      firstChild = child;
    } else if (child.props.slot === "second") {
      secondChild = child;
    }
  });

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
      }}
    >
       

      {firstChild}

      <div style={{margin:'20px 0px'}}>

      <hr />
      </div>
     
      {secondChild}
    </div>
  );
}
