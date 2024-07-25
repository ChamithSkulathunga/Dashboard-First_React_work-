import React,{ Children } from "react";

export default function TitleAndContentWrapper({children}) {

 let firstChild, secondChild;

 
Children.forEach(children, (child)=>{
    if (child.props.slot === 'first'){
        firstChild = child;
    }else if (child.props.slot === 'second'){
        secondChild = child;
    }
})

  return (
    <div style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.5)", padding: "20px", borderRadius:'8px' }}>
      {firstChild}
      <hr />
      {secondChild} 
    </div>
  );
}
