import PropTypes from "prop-types";
import Age from "./Age";

export default function Welcome({ name, age }) {
  return (
    <>
      <p>Welcome {name}</p>
      <Age age={age} />
    </>
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
