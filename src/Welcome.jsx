import React from "react";
import PropTypes from "prop-types";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>Welcome {this.props.name}</p>
        <p>Your age is {this.props.age}</p>
      </>
    );
  }
}

Welcome.defaultProps = {
  name: "NoName",
  age: 18,
};

Welcome.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Welcome;

