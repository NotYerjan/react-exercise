import Login from "./Login";
function App() {
  const onLogin = (e, username, password, remember, onReset) => {
    e.preventDefault();
    console.log(username, password, remember);
    onReset();
  };
  return (
    <>
      <Login onLogin={onLogin} />
    </>
  );
}

export default App;
