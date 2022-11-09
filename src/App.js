function App() {
  const sum = (a, b) => a + b;

  return (
    <div className="App">
      <h2>{sum(4, 5)}</h2>
    </div>
  );
}

export default App;
