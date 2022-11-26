import Login from "./Login";
function App() {
  const onLogin = (e, username, password, remember) => {
    e.preventDefault();
    console.log(username, password, remember);
  };
  return (
    <>
      <Login onLogin={onLogin} />
    </>
  );
}

export default App;
