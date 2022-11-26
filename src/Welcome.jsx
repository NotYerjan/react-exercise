import PropTypes from "prop-types";

import React from "react";

export default function Welcome({ name }) {
  return <p>Welcome {name}</p>;
}

Welcome.defaultProps = {
  name: "NoName",
};

Welcome.propTypes = {
  name: PropTypes.string,
};
