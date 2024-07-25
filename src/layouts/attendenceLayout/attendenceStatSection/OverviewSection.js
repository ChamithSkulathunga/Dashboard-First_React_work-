import React from 'react';

export default function OverviewSection({ image, title, value, isFirst }) {
  return (
    <div>
      <img src={image} alt={title} width={'30px'} />
      {isFirst && <p>{title}</p>}
      <div>
        <h3>{value}</h3>
      </div>
    </div>
   
  );
}
