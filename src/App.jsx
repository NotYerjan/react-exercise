import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";
function App() {
  const onLogin = (e, username, password, remember, onReset) => {
    e.preventDefault();
    console.log(username, password, remember);
    onReset();
  };
  return (
    <>
      <Login onLogin={onLogin} />
      <UncontrolledLogin />
    </>
  );
}

export default App;
