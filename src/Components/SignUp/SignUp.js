import React, { useRef, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './Signup.css';
import { useAuthContext } from '../../Contexts/AuthContext';
import { signUp } from '../../fireBaseAuth';
export function SignUp() {
  const [auth, dispatch] = useAuthContext();
  const [value, setValue] = useState('SIGN UP');
  const [disabled, setDisabled] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const {state} = useLocation()
  function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password === confirmPassword) {
      setValue('SIGNING UP...');
      setDisabled(true);
      signUp(email, password)
        .then((user) => {
          setDisabled(false);
          setValue('SIGN UP');
          navigate(state?.path||"/");
          dispatch({ type: 'SET_USER', user });
        })
        .catch((error) => {
          console.error(error);
          setDisabled(false);
          setValue('SIGN UP');
        });
    } else {
    }
  }

  return auth.user == null ? (
    <div className="sign-up">
      <h2>SIGN UP</h2>
      <form className="form-signup" onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          className="input"
          placeholder="Enter your name here"
          ref={nameRef}
          required
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="Email"
          className="input"
          placeholder="xyz@gmail.com"
          ref={emailRef}
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="Password"
          className="input"
          placeholder="Enter your password here"
          ref={passwordRef}
          required
        />
        <label htmlFor="confirm">confirm password</label>
        <input
          type="password"
          id="confirm"
          className="input"
          placeholder="Confirm your password"
          ref={confirmPasswordRef}
          required
        />
        <button className="btn btn-primary" disabled={disabled}>
          {value}
        </button>
      </form>
    </div>
  ) : null;
}
