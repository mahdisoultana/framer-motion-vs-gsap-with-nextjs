import React from "react";
import { motion } from "framer-motion";

function RevelText({
  children,
  delay = 0,
  as = "span",
  anime = null,
  bounce = 0.3,
  animate = null,
  initial = null,
  exit = null,
  className = "",
  ...restProp
}) {
  return React.createElement(
    as || "span",
    { className: "overflow-hidden block" },
    <motion.span
      initial={initial || anime || { y: 100 }}
      animate={
        animate || {
          y: 0,
          transition: { delay, type: "spring", bounce },
        }
      }
      exit={exit || { y: 100 }}
      className={`block ${className}`}
      {...restProp}
    >
      {children}
    </motion.span>,
  );
}

export default RevelText;
