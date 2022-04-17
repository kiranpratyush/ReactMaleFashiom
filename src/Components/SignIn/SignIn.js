import React, { useRef, useState } from 'react';
import { useAuthContext, signIn } from '../../export';
import './Signin.css';
export function SignIn() {
  const [state, dispatch] = useAuthContext();
  const [value, setValue] = useState('SIGN IN');
  const [disabled, setDisabled] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSubmit(e) {
    setValue('SIGNING IN....');
    setDisabled(true);
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signIn(email, password)
      .then((user) => {
        setValue('SIGN IN');
        setDisabled(false);
        dispatch({ type: 'SET_USER', user });
      })
      .catch((error) => {
        setValue('SIGN IN');
        setDisabled(false);
        dispatch({ type: 'SET_USER', error });
      });
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }
  console.log(state.user);
  return !state.user ? (
    <div className="sign-in">
      <h2>SIGN IN</h2>
      <form className="form-signin" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="email23"
          className="input"
          placeholder="xyz@gmail.com"
          ref={emailRef}
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="Password23"
          className="input"
          placeholder="123456"
          ref={passwordRef}
          required
        />
        <button className="btn btn-primary" disabled={disabled}>
          {value}
        </button>
        <br />
        <button
          className="btn btn-primary"
          disabled={disabled}
          onClick={() =>
            signIn('xyz@gmail.com', '123456')
              .then((user) => {
                dispatch({ type: 'SET_USER', user });
              })
              .catch((error) => {
                dispatch({ type: 'SET_USER', error });
              })
          }
        >
          SIGN IN AS GUEST
        </button>
      </form>
    </div>
  ) : (
    <h2>You are already Signed In</h2>
  );
}
