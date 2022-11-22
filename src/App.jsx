import Counter from "./Counter";
function App() {
  return (
    <>
      <Counter />
      <Counter count={10} increment={3} interval={4000} />
    </>
  );
}

export default App;
