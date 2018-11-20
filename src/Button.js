import React from "react";

export const Button = ({ children, primary }) => (
  <button
    style={{
      display: "inline-block",
      padding: "0 48px",
      height: 50,
      borderRadius: 50,
      lineHeight: "50px",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: primary ? "#00c4a7" : "#adadad",
      background: primary ? "#00c4a7" : "#fff",
      color: primary ? "#fff" : "#363636",
      fontSize: 14,
      fontFamily: "sans-serif"
      // textRendering: "optimizeLegibility"
    }}
  >
    {children}
  </button>
);
