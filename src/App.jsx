import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Welcome name={"Yerjan"} age={24} />
      <Welcome age={67} />
      <Welcome name={"Akira"} age={15} />
    </>
  );
}

export default App;
