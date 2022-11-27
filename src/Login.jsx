import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const onLogin = (e, username, password, remember) => {
    e.preventDefault();
    console.log(username, password, remember);
  };

  const btnStyle = {
    backgroundColor: password.length < 8 ? "red" : "green",
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => onLogin(e, username, password, remember)}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          id="remember"
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label htmlFor="remember">Remember me</label>
        <button
          style={btnStyle}
          type="submit"
          disabled={username && password ? false : true}>
          Login
        </button>
      </form>
    </div>
  );
}
