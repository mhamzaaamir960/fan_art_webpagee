import React from "react";

function MaxWidthWrapper({ children, className }) {
  return <div className={`max-w-[1920px] w-full ${className}`}>{children}</div>;
}

export default MaxWidthWrapper;
