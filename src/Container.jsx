import React from "react";

const containerStyle = {
  backgroundColor: "white",
  border: "1px solid red",
};

export default function Container({ children }) {
  return <div style={containerStyle}>{children}</div>;
}
