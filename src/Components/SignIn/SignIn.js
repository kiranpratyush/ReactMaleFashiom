import React, { useRef, useState } from 'react';
import { useAuthContext } from '../../Contexts/AuthContext';
import { signIn } from '../../fireBaseAuth';
import { useLocation ,useNavigate} from 'react-router-dom';
import './Signin.css';
export function SignIn() {
  const [auth, dispatch] = useAuthContext();
  const [value, setValue] = useState('SIGN IN');
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate()
  const {state} = useLocation()
  const emailRef = useRef();
  const passwordRef = useRef();
  console.log(state)
  function handleSubmit(e) {
    setValue('SIGNING IN....');
    setDisabled(true);
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signIn(email, password)
      .then((user) => {
        setValue("SIGN IN")
        setDisabled(false)
        dispatch({ type: 'SET_USER', user });
        navigate(state?.path||"/")
      })
      .catch((error) => {
      setValue("SIGN IN")
      setDisabled(false)
      console.error(error)
      }
      );
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }
  console.log(auth.user);
  return !auth.user ? (
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
          placeholder="Enter your password here"
          ref={passwordRef}
          required
        />
        <button className="btn btn-primary" disabled ={disabled}>{value}</button>
      </form>
    </div>
  ) : (
    <h2>You are already Signed In</h2>
  );
}
