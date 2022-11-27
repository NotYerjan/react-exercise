import React from "react";

const containerStyle = {
  backgroundColor: "white",
  border: "1px solid red",
};

export default function Container({ children, title }) {
  return (
    <div style={containerStyle}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
