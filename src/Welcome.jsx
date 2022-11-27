import React from "react";
import PropTypes from "prop-types";

export default function Welcome({ name, age }) {
  return (
    <div className="welcome">
      <p>Welcome {name}</p>
      <p>Your age is {age}</p>
    </div>
  );
}

Welcome.defaultProps = {
  name: "NoName",
  age: 18,
};

Welcome.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
