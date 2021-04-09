import React from "react";

export default function Loading() {
  return (
    <div style={{paddingTop: '4rem'}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{margin: 'auto', background: 'transparent', display: 'block', shapeRendering: 'auto'}}
        width="144px"
        height="144px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="white"
          strokeWidth="8"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
}
