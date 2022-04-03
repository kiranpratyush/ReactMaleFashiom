import React,{useState,useRef} from 'react';
import { useAuthContext } from '../../Contexts/AuthContext';
import {signIn} from "../../fireBaseAuth"
import './Signin.css';
export function SignIn() {
  const [state, dispatch] = useAuthContext();
  const [error, setError] = useState('');
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
      signIn(email, password)
        .then((user) => dispatch({ type: 'SET_USER', user }))
        .catch((error) => dispatch({ type: 'SET_USER', error }));
    emailRef.current.value =""
    passwordRef.current.value =""
  }
  console.log(state.user)
  return (
    !state.user?
    <div className="sign-in">
      <h2>SIGN IN</h2>
      <form className="form-signin" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="email23"
          className="input"
          placeholder="xyz@gmail.com"
          ref ={emailRef}
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="Password23"
          className="input"
          placeholder="Enter your password here"
          ref = {passwordRef}
          required
        />
        <button className="btn btn-primary">SIGN IN</button>
      </form>
    </div>:<h2>You are already Signed In</h2>
  );
}
