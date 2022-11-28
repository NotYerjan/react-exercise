import React from "react";
import PropTypes from "prop-types";

export default function Sum({ numbers }) {
  return <h1>{numbers.reduce((current, number) => current + number)}</h1>;
}
Sum.defaultProps = {
  numbers: [0],
};

Sum.propTypes = {
  numbers: PropTypes.array,
};
