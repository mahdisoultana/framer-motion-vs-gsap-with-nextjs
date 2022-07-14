import React, { useEffect } from "react";
import { gsap } from "gsap";
function RevelText({
  children,
  anime = null,
  delay = 0,
  className = "",
  as = "span",
  ...restProp
}) {
  const line = React.useRef(null);
  React.useEffect(() => {
    gsap.from(
      line.current,
      (anime && { y: 50, delay, ...anime }) || {
        delay,
        y: 50,
      },
    );
  }, []);
  return React.createElement(
    as || "span",
    { className: className + " block overflow-hidden", ...restProp },
    <div className=" block" ref={line}>
      {children}
    </div>,
  );
}

export default RevelText;
