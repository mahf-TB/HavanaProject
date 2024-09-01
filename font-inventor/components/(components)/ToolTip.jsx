import React, { useRef } from "react";

export default function ToolTip({ children, tooltip }) {
  const tooltipRef = useRef()
  const container = useRef()
  return (
    <div 
    ref={container}
    onMouseEnter={({clientX})=>{
      if(!tooltipRef.current || !container.current) return;
      const {left} = container.current.getBoundingClientRect()
      tooltipRef.current.style.left = clientX - left +"px";
      
    }}
     className="group relative inline-block">
      {children}
      <span ref={tooltipRef} className="text-xs invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-gray-500 text-slate-100 p-2 rounded  absolute top-full mt-1 whitespace-nowrap">
        {tooltip}
      </span>
    </div>
  );
}
