import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const onReset = () => {
    setUsername("");
    setRemember(false);
    setPassword("");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => onLogin(e, username, password, remember, onReset)}>
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
        <button type="submit" disabled={username && password ? false : true}>
          Login
        </button>
        <button
          type="reset"
          onClick={onReset}
          disabled={username || password || remember ? false : true}>
          Reset
        </button>
      </form>
    </div>
  );
}
