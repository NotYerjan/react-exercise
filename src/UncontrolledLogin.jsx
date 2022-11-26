import React, { useRef } from "react";

export default function UncontrolledLogin() {
  const username = useRef();
  const password = useRef();
  const remember = useRef();

  const onUncontrolledLogin = (e) => {
    e.preventDefault();
    const refs = {
      username: username.current.value,
      password: password.current.value,
      remember: remember.current.checked,
    };
    console.log(refs);
    onReset();
  };
  console.log(username);
  const onReset = () => {
    username.current.value = "";
    password.current.value = "";
    remember.current.checked = false;
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => onUncontrolledLogin(e)}>
        <label htmlFor="username-uncontrolled">Username</label>
        <input
          id="username-uncontrolled"
          type="text"
          ref={username}
          autoFocus
        />
        <br />
        <label htmlFor="password-uncontrolled">Password</label>
        <input id="password-uncontrolled" type="password" ref={password} />
        <br />
        <input id="remember-uncontrolled" type="checkbox" ref={remember} />
        <label htmlFor="remember-uncontrolled">Remember me</label>
        <button type="submit">Login</button>
        <button type="reset" onClick={onReset}>
          Reset
        </button>
      </form>
    </>
  );
}
