import Welcome from "./Welcome";
import Sum from "./Sum";

function App() {
  const numbers = [12, 34, 54, 32, 12];
  return (
    <>
      <Welcome name={"Yerjan"} age={21} />
      <Welcome />
      <Sum numbers={numbers} />
    </>
  );
}

export default App;
