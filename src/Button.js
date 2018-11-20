import React from "react";

import "./button.css";

export const Button = ({ children, primary }) => (
  <button className={primary ? "primary" : ""}>{children}</button>
);
