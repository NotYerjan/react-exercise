import React from "react";
import PropTypes from "prop-types";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>Welcome {this.props.name}</p>
        {this.props.age > 18 && <Age age={this.props.age} />}
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
